# Test task server

## test task:
Express web-server that work with dog images.

---

### information about the author

### Name Surname:
 Komakh Ihor
                                                                
### Email:                                               
  komahihor@gmail.com

 ---
 
## Task: 
Develop Express web-server that work with dog images. it should change the sizes, save it to the database and issue it according to the parameters

### Project requirements: 
Create a server on Express.js with 2 routes:
   
   1) POST / upload / dog / image:
      generates a random image of the animal through the API https://random.dog/woof.json
      (this API can return videos - we need to skip them)
      resizes the image with the resize parameters obtained in the yearbook
      saves the information to the database
   
   2) GET ?height& width / list / dog / images
      accepts parameters for search (filtering) and returns all pictures that satisfy them
---



