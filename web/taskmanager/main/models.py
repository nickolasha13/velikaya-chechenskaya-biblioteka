from django.db import models
from django.core.validators import FileExtensionValidator



class News(models.Model):
    title = models.CharField(max_length=255, verbose_name="Новость")
    description = models.TextField(blank=True, verbose_name="Контент")
    photo = models.ImageField(upload_to='photos/%y/%m/%d/', verbose_name="Превью")
    cat = models.ForeignKey("NewsCategory", on_delete=models.PROTECT, verbose_name="Категория")
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"


class NewsCategory(models.Model):
    name = models.CharField(max_length=100, db_index=True, verbose_name="Название")
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")

    class Meta:
        verbose_name = "Категория новостей"
        verbose_name_plural = "Категории новостей"


class Youtuber(models.Model):
    name = models.CharField(max_length=255, verbose_name="Имя")
    youtuber_link = models.CharField(max_length=255, verbose_name="Ссылка")
    contacts = models.JSONField()

    class Meta:
        verbose_name = "Ютубер"
        verbose_name_plural = "Ютуберы"


class Version(models.Model):
    number = models.CharField(max_length=10, verbose_name="Версия")
    short_text = models.TextField(blank=True, verbose_name="Статья")
    background_image = models.ImageField(upload_to='photos/%y/%m/%d/', verbose_name="Фон")

    background_video = models.FileField(upload_to="videos/%y/%m/%d/", verbose_name="Видео фон")

    background_video_webp = models.FileField(upload_to="videos/%y/%m/%d/", verbose_name="Видео фон webp", validators=FileExtensionValidator(["webp"]))

    is_going = models.BooleanField(default=True, verbose_name="Активна ли")

    class Meta:
        verbose_name = "Версия"
        verbose_name_plural = "Версии"