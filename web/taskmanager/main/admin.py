from django.contrib import admin
from .models import *


class NewsCategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(News)
admin.site.register(NewsCategory, NewsCategoryAdmin)
admin.site.register(Youtuber)
admin.site.register(Version)

