FROM php:7.2-apache

ARG WORKDIR_WEB
ARG VIRTUALHOST_FILE

LABEL com.puebla.${CONTAINER_NAME} \
	  com.puebla.author="Pablo De Jesús Moreno" \
	  com.puebla.email="pablo.24726@gmail.com" \
	  com.puebla.version="1.1.0" \
	  com.puebla.release-date="2020-09-09" \
	  com.puebla.version.is-production="false"

WORKDIR $WORKDIR_WEB

# Add Virtualhost
ADD $VIRTUALHOST_FILE /etc/apache2/sites-available/000-default.conf

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		# Locales
		locales \
		# Installing an editor is not necessary, but is handy
		vim \
		# Install system dependencies
		autoconf \
		apt-utils \
		build-essential \
		curl \
		libmagick++-dev \
		libmagickwand-dev \
		libpq-dev \
		openssl \
		unzip \
	&& a2enmod rewrite \
	# INSTALL PHP
	# intl
	&& apt-get install -y --no-install-recommends \
		libicu-dev \
	&& docker-php-ext-configure intl \
	&& docker-php-ext-install -j$(nproc) intl \
	# xml
	&& apt-get install -y --no-install-recommends \
		libxml2-dev \
		libxslt-dev \
	&& docker-php-ext-install -j$(nproc) \
		dom \
		xmlrpc \
		xsl \
	# images
	&& apt-get install -y --no-install-recommends \
		libfreetype6-dev \
		libjpeg-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
		libgd-dev \
	&& docker-php-ext-configure gd \
		--with-png-dir=/usr/include/ \
		--with-jpeg-dir=/usr/include/ \
		--with-freetype-dir=/usr/include/ \
	&& docker-php-ext-install -j$(nproc) \
		gd \
		exif \
	# database
	&& docker-php-ext-install -j$(nproc) \
		mysqli \
		pdo \
		pdo_mysql \
		pgsql \
		pdo_pgsql \
	# strings
	&& apt-get install -y --no-install-recommends \
		libonig-dev \
	&& docker-php-ext-install -j$(nproc) \
		gettext \
		mbstring \
	# math
	&& apt-get install -y --no-install-recommends \
		libgmp-dev \
	&& ln -s /usr/include/x86_64-linux-gnu/gmp.h /usr/include/gmp.h \
	&& docker-php-ext-install -j$(nproc) \
		gmp \
		bcmath \
	# compression
	&& apt-get install -y --no-install-recommends \
		libbz2-dev \
		zlib1g-dev \
		libzip-dev \
	&& docker-php-ext-install -j$(nproc) \
		zip \
		bz2 \
	# ftp
	&& apt-get install -y --no-install-recommends \
		libssl-dev \
	&& docker-php-ext-install -j$(nproc) \
		ftp \
	# ssh2
	&& apt-get install -y --no-install-recommends \
		libssh2-1-dev \
	# memcached
	&& apt-get install -y --no-install-recommends \
		libmemcached-dev \
		libmemcached11 \
	# others
	&& docker-php-ext-install -j$(nproc) \
		calendar \
		ctype \
		fileinfo \
		iconv \
		json \
		phar \
		soap \
		sockets \
		sysvmsg \
		sysvsem \
		sysvshm \
		tokenizer \
		xml \
		xmlwriter \
	# PECL
	&& pecl install \
		ssh2-1.2 \
		redis-5.1.1 \
		apcu-5.1.18 \
		memcached-3.1.4 \
	# Install XDebug, but not enable by default. Enable using:
	# * php -d$XDEBUG_EXT vendor/bin/phpunit
	# * php_xdebug vendor/bin/phpunit
	&& pecl install xdebug-2.8.0 \
    && docker-php-ext-enable xdebug \
	# Install composer and put binary into $PATH
	&& curl -sS https://getcomposer.org/installer | php \
	&& mv composer.phar /usr/local/bin/ \
	&& ln -s /usr/local/bin/composer.phar /usr/local/bin/composer \
	# Add development php.ini file
	&& cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini \
	# Enable Virtualhost
	&& a2ensite 000-default.conf \
	# Install NodeJS
	&& curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs \
	# Clear cache
	&& apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/* /var/cache/*
