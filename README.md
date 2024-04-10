
![logos](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/a6ea7e6c-b471-474a-a04d-0724e5506a3e)

"A web platform to raise awareness about the importance of blood donation and encourage people to become donors."

Frontend: React.js 
Backend: Django

We divide the Platform into two main Parts:

Frontend & Backend

## Contents:
- Home
- Analytics
- Informational Resources
- Quizes and Challenges
- ContactUs
- Donate Now
- Register Now

## Skills used:
- Html
- CSS
- ReactJs
- Javascript
- Django
- Python


## Start the Project:

Create Folder "blood_donation" & in that folder run following commands:

```bash
npx create-react-app frontend
python -m django --version

```

Download Python & then Install the Dijango by using following commands in your project folder "blood_donation" :

```bash
pip install Django
python -m django --version
npm install

```

Basic Commands [just for information]
```bash
PS C:\Projects\blood_donation> cd frontend
PS C:\Projects\blood_donation\frontend>
PS C:\Projects\blood_donation\frontend> cd ..

PS C:\Projects\blood_donation> cd backend
PS C:\Projects\blood_donation\backend>
PS C:\Projects\blood_donation\backend>cd ..
```

![G](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/d4017400-ab20-4f29-94b8-14730800e4d2)


## Frontend:

### First we work on frontend:

We have Given the following basic flow chart for our whole project

![B](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/7ed4fe3f-1bc6-443f-9f27-16f01d3e2a90)


## Color Reference

### These are two main colors given below used as Variables:


| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Red Color | ![#ea062b](https://via.placeholder.com/10/ea062b?text=+) #ea062b |
| Black Color | ![#111111](https://via.placeholder.com/10/111111?text=+) #111111 |


## Backend:

### Now we work on backend:

In Your Project Folder "frontend" run following command:

```bash
python -m django startproject backend
```
Now In Your  backend folder run following command:

```bash
pip install django-cors-headers
python manage.py runserver
```
After successfully run your django project, run following command in backend folder:

```bash
python manage.py startapp api
```

After completing this, write following in your backend>backend>settings.py:

```bash
'corsheaders',
'rest_framework',
'api'

```

```bash

MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]

```

```bash
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173' "your localhost link"
]

```
![A](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/9cf2f109-3cab-41d6-9732-f84291c13ffd)


then create your database model project-folder"blood-donation">backend>api>models.py

and express in project-folder"blood-donation">backend>api>admin.py[given in code]

```bash
class Users(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.CharField(max_length=15)
    blood_group = models.CharField(max_length=15)
    lst_dnt_date = models.CharField(max_length=15)
    contact_number = models.CharField(max_length=15)
    st_address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name

```
After Describing Structure, then write following code :

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

```
After successfully running your superuser command give the username , email and password to run your database Like:

```bash
username: admin
email: admin@admin.com
password: admin
```
then run your backend by following command:

```bash
python manage.py runserver
http://127.0.0.1:8000 [yourlocalhostlink]
```

![C](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/ec505dfe-aecf-432e-aa9c-847cc6f361eb)


Then write your localhost url / admin to view your database structure:

```bash
http://127.0.0.1:8000/admin [yourlocalhostlink/admin ]
```
![D](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/fb52a3af-8b87-4c41-940b-b34ebdfa5af4)


then write your username[admin] and password[admin] to proceed further

![E](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/45ca5526-cfe3-4e66-93d1-584becfb66bd)


& you can add users  by clicking "Add Users"

![F](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/60c529f7-30af-483d-83dd-170b8c4bb6c3)



After Describing Structure we write our code in project-folder "blood-donation">backend>api>serializer.py (made by own) and write whole code for your project which is given in above code files[given]


## Screenshots of Our Project:
![sc-1](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/89870b3f-bcd0-43cb-b30d-3bca79d2ca04)

![sc-2](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/2dcb9c25-d4d7-4b5c-a10d-a7d9c4bca484)

![sc-3](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/68179daa-0e3d-4e39-9976-5a97ec3e45bf)

![sc-4](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/b6f9c5ba-17d7-4b5c-b9fa-9e6b6e7cbe24)

![sc-5](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/ac182e27-2008-4062-b62a-3bf2b931cc57)

![sc-6](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/047261d8-9bc7-41a9-b5a0-c7cc02f0867a)

![sc-7](https://github.com/sadiaqadri-web/blood-donation/assets/65070833/a01b3038-3f57-4251-9d5d-721acbd6d090)


# Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting:
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size:
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App:
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration:
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment:
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify:
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
