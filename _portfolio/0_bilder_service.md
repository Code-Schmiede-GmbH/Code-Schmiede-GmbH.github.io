---
title: Cloud Bilder Service
subtitle: Schnelles Bereitstellen von Bildern im richtigen Format für ein Blog
image: https://image-service.azureedge.net/from/walter-it-consulting/resize-to/350/image-service.jpg
alt: Bilderauswahl

caption:
  title: Bilder Service
  subtitle: Microsoft Azure Cloud Services
  thumbnail: https://image-service.azureedge.net/from/walter-it-consulting/resize-to/350/image-service.jpg
---
Für den Wanderblog alsnuff.ch, der sehr viele Fotos zur Illustration von Wanderungen verwendet, wurde ein Service zur performanten Bereitstellung von Bildern gesucht.

Da die Datenmenge schnell die Kapazität des eingesetzten Servers überstieg, wurde erst [Cloudinary](https://cloudinary.com/) in der kostenlosen Variante eingesetzt. Nach zwei Jahren wurde auch diese Variante ausgereizt. Es galt abzuwägen, ob die nächst höhere Lizenz für 99$ pro Monat abonniert werden muss oder ein eigener Bilder Service entwickelt wird.

Um die Kosten des kleinen Blogs über die Zeit gering zu halten, wurde sich für die Eigenentwicklung entschieden. Hierzu wurde auf Microsoft Azure ein CDN, ein Storage mit Buckets und ein App Service eingesetzt, um die Bilder in die gewünschten Formate zu transformieren.