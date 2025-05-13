FROM php:8.1-apache

WORKDIR /var/www/html

COPY . .

EXPOSE 80

RUN echo "DirectoryIndex index.html " >> /etc/apache2/apache2.conf

CMD ["apache2-foreground"]
