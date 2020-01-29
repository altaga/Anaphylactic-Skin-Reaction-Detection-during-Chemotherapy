# Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy

Anaphylactic Skin Reaction Detection during Chemotherapy

<img src="https://i.ibb.co/p1MvBJF/Logo.png" width="1000">

# Table of contents

* [Introduction](#introduction)
* [Materials](#materials)
* [Connection Diagram](#connection-diagram)
* [Jetson Setup](#jetson-setup)
* [Webpage Setup](#webpage-set)
* [Jupyter Notebook](#jupyter-notebook)
* [The Final Product](#the-final-product)
* [Future Rollout](#future-rollout)
* [References](#references)

# Introduction:

Nowadays we have serious problems in healthcare. Despite the fact that many of them have already been solved with technology, many times the industry is reluctant to change and adopt new technologies. 

Cancer patients, for example, have to be treated with chemotherapy continuously, however this process is not simple or pleasant. The worst part of this, is the possibility of being allergic to chemotherapy. Approximately 12 percent of patients who are treated in chemotherapy have an allergic reaction to it, which can trigger a simple blush to death. This is a very studied phenomenon which have several symptoms and phases. One of the main symptoms (1) before severe anaphylaxis in this type of treatment is flushing of the face, after that there may be symptoms such as:

<img src="https://i.ibb.co/5cmbf4K/image.png" width="1000">

If the first symptoms regarding flushing, blushing and facial redness can be detected faster, we can avoid most of the more severe ones by administering treatment promptly.

This problem is quite severe and happens even in top of the line hospitals (2). Personally I worked in one of these, and to my surprise these kinds of reactions happen quite often and I think that AI and CV technologies have the capability to tend to this problem faster and directly so medical professionals can have a faster reaction to it.

(1) https://ctep.cancer.gov/protocolDevelopment/electronic_applications/docs/CTCAE_v5_Quick_Reference_8.5x11.pdf

(2) https://www.ncbi.nlm.nih.gov/books/NBK333506/table/ch04.sec1.table1/

# Materials:

Hardware:
- NVIDIA Jetson Nano.                                x1.
https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/
- USB TP-Link USB Wifi Adapter TL-WN725N.            x1.
https://www.amazon.com/dp/B008IFXQFU/ref=cm_sw_em_r_mt_dp_U_jNukEbCWXT0E4
- Logitech HD Laptop Webcam C615.                   x1.
https://www.amazon.com/dp/B004YW7WCY/ref=cm_sw_em_r_mt_dp_U_8OukEbBJGXVNX
- 32 GB MicroSD Card.                                x1.
https://www.amazon.com/dp/B06XWN9Q99/ref=cm_sw_em_r_mt_dp_U_XTllEbK0VKMAZ
- 5V-4A AC/DC Adapter Power Supply Jack Connector.   x1.
https://www.amazon.com/dp/B0194B80NY/ref=cm_sw_em_r_mt_dp_U_ISukEbJN7ABK3

Only for Setup Hardware:
* Any screen with HDMI (I recommend having one).       x1.
https://www.amazon.com/dp/B07NNXH2SS/ref=cm_sw_em_r_mt_dp_U_8OrlEb9J2D08W
* HDMI cable.                                          x1.
https://www.amazon.com/dp/B075ZTJ9XR/ref=cm_sw_em_r_mt_dp_U_KLrlEb1EPH5NY
* Wireless Keyboard.                                   x1.
https://www.amazon.com/dp/B00I5SW8MC/ref=cm_sw_em_r_mt_dp_U_CTrlEbQZ3VS8F

Software:
- JetPack 4.3:
https://developer.nvidia.com/jetson-nano-sd-card-image-r3231
- NodeJS:
https://nodejs.org/
- ReactJS:
https://reactjs.org/
- balenaEtcher:
https://www.balena.io/etcher/
- Jupyter Notebook:
https://jupyter.org/install
- TensorFlow Nvidia Version:
https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html
- AWS:
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html

# Connection Diagram:

This is the connection diagram of the system:

<img src="https://i.ibb.co/0GPWx3j/Diagram-Recovered.png" width="800">

# Jetson Setup:

## Jetson Source Setup:

Because we power the Jetson Nano through an external 5-volt source with a Jack connector, we will have to place a Jumper on the J48 connector of the Jetson as shown in the image.

<img src="https://i.ibb.co/BGFzj9k/jumper.png" width="800">

## Jetson SD card Setup:

This is the explanation on how to install the Jetson SDK OS image on an SD card. You will need a computer with an SD card reader to install the image.

We recommend downloading the latest version of the SDK, in this guide I use version 4.3.0 (most recent to date).

Official Link: https://developer.nvidia.com/embedded/jetpack

You'll need to unzip the file to get the image file (.img) to write to your SD card, If you do not have a program to unzip, i recommend any of the following according to your operating system (windows in my case).

7-Zip (Windows):

https://www.7-zip.org/

The Unarchiver (Mac):

https://theunarchiver.com/

Unzip (Linux):

https://linuxize.com/post/how-to-unzip-files-in-linux/

<img src="https://i.ibb.co/tx4ZSpb/image.png" width="600">

## Format your SD.

Windows and Mac:

https://www.sdcard.org/downloads/formatter/index.html

Linux:

https://www.pcworld.com/article/3176712/how-to-format-an-sd-card-in-linux.html

My computer does not have an SD card reader so I use this external (any reader it's ok).

<img src="https://i.ibb.co/drrQkgs/20200125-180653.jpg" width="600">

And this is the software SD card formatter, I especially like this program because this type of operating system creates multiple partitions in the SD memories and the format of them can be complicated if we want to reformat later, however this program does everything automatically.

<img src="https://i.ibb.co/yQ0mmc1/image.png" width="400">

## Flash the sd card with the OS

You will need to use an image writing tool to install the image you have downloaded on your SD card, I recommend balenaEtcher it works on all OS and it is not necessary to unzip the .zip to perform the OS flash.

Download Link: https://www.balena.io/etcher/

<img src="https://i.ibb.co/TWMH7FM/image.png" width="600">

Once the process is completed correctly we see the following message.

<img src="https://i.ibb.co/zJSdVG4/image.png" width="600">

### Jetson OS Setup:

Insert the SD into the SD slot of the Jetson Nano.

<img src="https://i.ibb.co/YPKS7QF/Slot.png" width="600">

Connect the Jetson Nano to the screen using the HDMI cable, connect the wireless keyboard receiver, connect the network card and connect the power supply.

<img src="https://i.ibb.co/NY3t4pc/Hardwaresetup.png" width="600">

We will configure the operating system, it is very simple.

* Accept the terms.

<img src="https://i.ibb.co/5T55mgJ/20200126-015446.jpg" width="600">

* Select your language.

<img src="https://i.ibb.co/MSBkGmV/20200126-015511.jpg" width="600">

* Select your keyboard layout.

<img src="https://i.ibb.co/W5TGWtH/20200126-015531.jpg" width="600">

* Configure your wifi.

<img src="https://i.ibb.co/KFB4wC3/20200126-015605.jpg" width="600">

* Select your region.

<img src="https://i.ibb.co/F6q0vv9/20200126-015658.jpg" width="600">

* Select your credentials.

**SUPER IMPORTANT NOTE: CHECK THE OPTION "Log in Automatically"**

<img src="https://i.ibb.co/9Vw9f9H/20200126-015742.jpg" width="600">

* Click ok to expand your Partition Size.

<img src="https://i.ibb.co/NmC0XGn/20200126-015755.jpg" width="600">

* Wait a couple of minutes.

<img src="https://i.ibb.co/c89BKHk/20200126-015853.jpg" width="600">

* If everything works, you will see a screen like this.

<img src="https://i.ibb.co/Th0TXT5/image.png" width="1000">

* This animation shows the final setup of the operating system.

<img src="https://i.ibb.co/QH5VwCT/ezgif-com-video-to-gif-4.gif" width="600">

* With this you should already have everything configured, from now the HDMI cable and the wireless keyboard are no longer necessary. All programming and final setup will be done through SSH.

## SSH Setup:

For this step we will create an ssh connection with the Jetson, if you have Mac or Linux are already preconfigured with OpenSSH library, so you can start your connection from the terminal with the following command.

    ssh -L 8000:localhost:8888 youruser@yourip

In my case the command is:

    ssh -L 8000:localhost:8888 vic@192.168.0.28

**NOTE: it is also possible to activate this library in windows but I recommend using the instructions that I will show you next.**

If you are a Windows user I recommend using the following program:

https://www.putty.org/

This animation shows how to configure Putty exactly as the last command.

<img src="https://i.ibb.co/JnsH0Xn/ezgif-com-video-to-gif-3.gif" width="600">

Taking the Putty console as example, clicking on connect will display the following message.

<img src="https://i.ibb.co/bWfcnds/image.png" width="600">

Click "Yes" to bring up the following window, as long as you do not format the Jetson OS it will not appear again, at this time it will ask for the password that we defined in the previous section.

<img src="https://i.ibb.co/QHCLHSs/image.png" width="600">

After putting the password in the command console, this window will appear, indicating that we are already connected to the Jetson Nano.

<img src="https://i.ibb.co/brWpyCW/image.png" width="600">

## Libraries Setup:

Once the wireless connection to the console is established, we will have to copy and paste the following commands into it and execute them.

* Command to download the project and get all the necessary files for the project.

        git clone https://github.com/altaga/Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy

* Command to enter the downloaded folder.

        cd Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy/Installer

* This command will install all the libraries and configurations necessary to setup the project correctly, to facilitate its installation i make an .sh file that performs all this automatically, however I also attached the commands separately in [Apendix A](#apendix-a), also the file can be reviewed by any text editor such as Notepad, Atom, VsCode, etc ...

**NOTE: Go for a coffee, some cookies and see the next chapter of your favorite series, because this process according to your internet connection can take 45 minutes to 2 hours to complete.**

        sudo bash Install.sh

With this process we will have all the libraries installed correctly:

* TensorFlow 2.0
* Awscli (we haven't finished setup this library)
* Numpy
* Jupyter Notebook
* PahoMQTT
* OpenCV (No Contrib Version)

Una vez este proceso haya concluido, revisaremos que Jupyter Notebook funcione correctamente, ya que sera nuestra UI en el resto del tutorial. Escribe en la consola el siguiente comando.

    jupyter notebook

Debera aparecer en el terminal algo asi.

<img src="https://i.ibb.co/YD0DMBs/image.png" width="600">

Copia el Token que aparece en la pantalla y sin cerrar esta ventana ir al tu navegador y poner en la barra de direcciones:

    localhost:8000

Debera aparecer una ventana como la siguiente:

<img src="https://i.ibb.co/Y8dkkrM/image.png" width="600">

En la seccion donde nos pide el token, pegaremos token que copiamos hace unos momentos.

<img src="https://i.ibb.co/LtkbFkF/image.png" width="600">

Si el token es valido deberiamos tener en el navegador los archivos de la Jetson, esto es importante ya que esta ventana nos permite gestionar los archivos de manera sencilla, ademas de poder ejecutar los archivos del proyecto.

## Configurando AWS Jetson:

Primero deberemos acceder a nuestra consola de AWS y buscar el servicio IoT Core.

<img src="https://i.ibb.co/KVbtQLR/image.png" width="600">

Primero obtendremos nuestro Endpoint de AWS, guarda muy bien esto ya que lo usaremos para configurar la Jetson y la Webpage.

<img src="https://i.ibb.co/ZYwrdfR/image.png" width="600">

En el panel lateral seleccionaremos la opcion de "Onboard" y luego en la opcion de "Get started".

<img src="https://i.ibb.co/gmKxc7P/image.png" width="600">

Selecciona "Get started".

<img src="https://i.ibb.co/XSxSxbF/image.png" width="600">

En Choose a Platform selecciona "Linux/OSX" en AWS IoT Device SDK selecciona "Python" y haz clic en "Next". 

<img src="https://i.ibb.co/JR69Fdd/image.png" width="600">

En Name escribe cualquier nombre que te parezca conveniente y haz clic en "Next step". 

<img src="https://i.ibb.co/NNLqqM0/image.png" width="600">

En la seccion "Download connection kit for" presiona el boton "Linux/OSX" para descargar el paquete de credenciales (lo usaremos mas adelante) y presiona "Next Step". 

<img src="https://i.ibb.co/RHVTRpg/image.png" width="600">

Presiona "Done".

<img src="https://i.ibb.co/N9c8jbG/image.png" width="600">

Presiona "Done".

<img src="https://i.ibb.co/DtBxq0k/image.png" width="600">

En la barra lateral en la seccion de Manage/Things podremos ver nuestra thing ya creada, ahora tenemos que configurar la policy de esa thing para que pueda funcionar sin restricciones en Aws. 

<img src="https://i.ibb.co/dQTFLZY/image.png" width="600">

En la barra lateral en la seccion de Secure/Policies podremos ver nuestra thing-policy, le damos clic para entrar y poder modificarla.

<img src="https://i.ibb.co/jThNgtc/image.png" width="600">

Presionamos "Edit policy document".

<img src="https://i.ibb.co/gV0tMtf/image.png" width="600">

Pegaremos el siguiente texto en el documento y lo guardamos.

    {
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect": "Allow",
        "Action": "iot:*",
        "Resource": "*"
        }
    ]
    }

<img src="https://i.ibb.co/ydtTqB2/image.png" width="600">

Una vez vez hecho esto, iremos en nuestra computadora a la carpeta con las credenciales que acabamos de descargar y la descomprimiremos.

<img src="https://i.ibb.co/mFKPxcY/image.png" width="600">

Entramos a la carpeta descomprimida y renombraremos los archivos de la siguiente forma.

    ThingNAME.cert.pem -> ThingCert.cert.pem

    ThingNAME.private.key -> PrivateCert.private.key

<img src="https://i.ibb.co/jzZqZHh/image.png" width="600">

Ya con los archivos renombrados, iremos a nuestra carpeta de Jupyter Notebook en la siguiente ruta.

<img src="https://i.ibb.co/fN00K9G/image.png" width="600">

En la esquina derecha hay un boton que dice "upload".

<img src="https://i.ibb.co/jz27sTD/image.png" width="600">

Al presionarlo podremos subir nuestros dos certificados a la carpeta.

<img src="https://i.ibb.co/ggQ8hq1/image.png" width="600">

Presiona cada uno de los botones de "upload" de color azul para terminar la subida de archivos.

<img src="https://i.ibb.co/k6X04K2/image.png" width="600">

Listo ya tenemos las credenciales listas para funcionar.

## Awscli Setup:

Esta es la libreria de AWS para poder gestionar y realizar acciones en cloud mediante Python, por lo tanto tendremos realizar la siguiente configuracion.

En la consola de AWS abriremos el servicio IAM.

<img src="https://i.ibb.co/qk3LP62/image.png" width="600">

En la seccion de Access Management/Users de presionaremos el boton de Add user.

<img src="https://i.ibb.co/xMpKZWz/image.png" width="600">

Ponemos cualquier User name y le presionamos en "Next:Permissions"

<img src="https://i.ibb.co/qMcmJSt/image.png" width="600">

Presionamos "Attach existing polices directly", en el buscador escribimos "S3" y seleccionamos la policy "AmazonS3FullAccess".

<img src="https://i.ibb.co/XYLz6DW/image.png" width="600">

Presionamos el boton de "Next" hasta que lleguemos a la pantalla de success, en esta veremos el Access Key ID y el Secret Access Key, ambas claves debemos guardarlas para configurar el Awscli.

<img src="https://i.ibb.co/kqmFzHg/image.png" width="600">

Desde nuestra UI de Jupyter Notebook en la el boton de "new" abre un nuevo terminal.

<img src="https://i.ibb.co/Tm0W9p4/image.png" width="600">

En el terminal que se abrio escribe el siguiente comando.

    aws configure

<img src="https://i.ibb.co/ZYJ0zPy/image.png" width="600">

Configura las credenciales de la siguiente forma

    AWS Access Key ID [None]: YOUR ACCESS KEY ID
    AWS Secret Access Key [None]: YOUR SECRET ACCESS KEY
    Default region name [None]: us-east-1
    Default output format [None]: json

Listo ya hemos configurado completamente la Jetson Nano.

# Webpage Setup:

## Aws Credentials Setup:

Entrar en la consola de AWS y buscar el servicio "Cognito".

<img src="https://i.ibb.co/nrF8P0W/image.png" width="600">

Entramos en "Manage Identity Pools"

<img src="https://i.ibb.co/Rh0mMQL/image.png" width="600">

Entramos en "Manage Identity Pools"

<img src="https://i.ibb.co/GMHB0d2/image.png" width="600">

Entramos en "Create new identity pool"

<img src="https://i.ibb.co/Rh0mMQL/image.png" width="600">

Le ponemos cualquier nombre a la pool y check a "Enable access to unauthenticated identities" y le presionamos en "Create Pool"

<img src="https://i.ibb.co/VJS43ff/Untitled-2.png" width="600">

En la siguiente ventana solo da clic en "Allow".

<img src="https://i.ibb.co/c3qgj5H/image.png" width="600">

Obtuvimos nuestro POOLID guardalo que lo usaremos mas adelante.

<img src="https://i.ibb.co/xhBfqVk/image.png" width="600">

Ve a la consola de AWS y entra a "IAM".

<img src="https://i.ibb.co/qk3LP62/image.png" width="600">

Dentro de la consola entra a la seccion de Roles en la barra de busqueda escibe "web" y entra en la que dice "Cognito_WebPagePoolUnauth_Role".

<img src="https://i.ibb.co/r0kcdvz/image.png" width="600">

Dentro del Role presionamos el boton de Attach policies para agregar los servicios que requerimos dentro de nuestra WebApp.

<img src="https://i.ibb.co/vZdLsFj/image.png" width="600">

Dentro de esta ventana tenemos que agregar 3 servicios.

* AmazonS3FullAccess
* AWSIoTFullAccess
* AmazonDynamoDBFullAccess

<img src="https://i.ibb.co/mFY33w9/image.png" width="600">

Ya que tenemos creados los permisos vamos a configurar la base de datos donde tendremos almacenados a los pacientes, desde la consola de AWS buscaremos el servicio DynamoDB.

<img src="https://i.ibb.co/W3MH7Zf/image.png" width="600">

Seleccionamos la opcion de Create Table.

<img src="https://i.ibb.co/k35HZ30/image.png" width="600">

Crea la tabla con los siguientes parametros, es importante que los nombres sean los mismos que estamos mostrando en la imagen.

Name: HacksterDB
Partition Key: PartKey
Sort Key: SortKey

<img src="https://i.ibb.co/dbFqpF6/image.png" width="600">

Una vez creada la tabla podremos generar registros en ella de pacientes que podremos visualizar en nuestra plataforma, los registros deben de llevar la siguiente estructura.

    {
    "Age": "56",
    "App": " 03/03/2020",
    "Cancer": "Sarcoma",
    "Comments": "Entrepreneur, if you don't have at least one TitanRTX on your computer, don't talk with him",
    "Incidents": "1",
    "Medicine": "Carboplatin",
    "PartKey": "dev1",
    "SortKey": "Jen-Hsun Huang"
    }

* Descipcion del registro:
    * Age: La edad de la persona
    * App: Fecha de su siguiente cita
    * Cancer: Tipo de Cancer de la persona
    * Comments: Comentarios extra sobre la persona
    * Incidents: Numero de incidentes hasta la fecha
    * Medicine: Medicina que se le proporciona al paciente
    * PartKey: El device que esta mandando el registro
    * SortKey: Nombre del paciente

Por ultimo vamos a crear un S3 bucket el cual nos sirva para almacenar cualquier archivo o imagen que necesitemos. Desde la consola de AWS buscaremos el servicio S3.

<img src="https://i.ibb.co/dtCKMBj/image.png" width="600">

Dentro del servicio de S3 presionamos el boton para crear un bucket.

<img src="https://i.ibb.co/zstLq8T/image.png" width="600">

Pon el nombre que gustes al bucket, pero anotalo que lo configuraremos despues.

<img src="https://i.ibb.co/PDmWFrs/image.png" width="600">

Uncheck todas las opciones de bloqueo como se muestran en la imagen.

<img src="https://i.ibb.co/FW4Fqbv/image.png" width="600">

Una vez termines esto, ya tendremos todo listo para configurar nuetsra WebAPP.

<img src="https://i.ibb.co/2ZP8mw0/image.png" width="600">

Uncheck todas las opciones de bloqueo como se muestran en la imagen.

<img src="https://i.ibb.co/FW4Fqbv/image.png" width="600">

Ya con esto habremos creado nuestro bucket, el cual tiene el siguiente URL.

    https://yourbucketname.s3.amazonaws.com/

## Add credentials to WebPage

Descargar el proyecto de Github en su computadora.

<img src="https://i.ibb.co/Ksd8Y42/image.png" width="600">

Entra dentro de la carpeta del proyecto entra en la siguiente ruta ReactAPP\src\views\examples.

<img src="https://i.ibb.co/Xt0yFmm/image.png" width="600">

Con el editor de tu preferencia abre los siguientes archivos.

* aws-configuration.js
* MyCard.jsx
* Card.jsx
* Profile.jsx

Dentro de aws-configuration.js vamos a pegar nuestro POOLID y nuestro AWS Endpoint.

<img src="https://i.ibb.co/tsYPQBw/image.png" width="600">

Dentro de MyCard.jsx vamos a pegar nuestro Url de Bucket.

<img src="https://i.ibb.co/TWscqmB/image.png" width="600">

Dentro de Card.jsx vamos a pegar nuestro Url de Bucket.

<img src="https://i.ibb.co/bbJdCPS/image.png" width="600">

Dentro de Profile.jsx vamos a pegar el nombre de la DB que le pusimos si el nombre que le pusiste a la DB fue "HacksterDB" no tienes te hacer nada mas.

<img src="https://i.ibb.co/HpsxRFp/image.png" width="600">

Para poder visualizar la DB en un navegador debemos instalar en nuestro ordenador NodeJS.

Link: https://nodejs.org/es/

Una vez instalado entrar en la capeta del proyecto llamada "ReactAPP".

<img src="https://i.ibb.co/NsHJj18/image.png" width="600">

Una vez dentro de la carpeta abre el terminal o en caso de windows el cmd.

NOTA: En windows si estas dentro de una carpeta y en la barra de direccion escribes "cmd" se abrira ahi la consola de comandos.

<img src="https://i.ibb.co/F3b8GGd/ezgif-2-e535d3643141.gif" width="600">

In the cmd or terminal wrtite the next commmand.

    npm install

<img src="https://i.ibb.co/bgp4Ms6/image.png" width="600">

Despues de un rato que se hayan instalado todas las dependencias del proyecto escribiremos en la consola.

    npm start

<img src="https://i.ibb.co/SPdkwZL/ezgif-com-video-to-gif-2.gif" width="600">

# Jupyter Notebook:

### Final Setup:

Entramos a la UI de Jupyter Notebook entrando desde el navegador a "localhost:8000". Ya no les debera pedir el token.

<img src="https://i.ibb.co/LtkbFkF/image.png" width="600">

Entramos a la carpeta "Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy\Jupyter Notebook\Anaphylactic Skin Reaction Detection during Chemotherapy.ipynb"

<img src="https://i.ibb.co/mSW4dFD/image.png" width="600">

Ya con todo cofigurado entramos en el navegador antes de hacer la revision de codigo tenemos que pegar en una de las variables el nombre de nuestro Bucket y nuestro Endpoint de AWS IoT.

<img src="https://i.ibb.co/wJdN3Bk/image.png" width="600">

# The Final Product:

Product:

<img src="https://i.ibb.co/cNx1sFw/ps2.jpg" width="800">
<img src="https://i.ibb.co/6BRDwXz/PsNew.jpg" width="800">

Essential components:

<img src="https://i.ibb.co/RT94wM3/Conection.jpg" width="800">

UI:

* Real time model performance
<img src="https://i.ibb.co/HPZ5MMb/image.png" width="800">

* Real time emergency notifications
<img src="https://i.ibb.co/F0BT9Mp/image.png" width="800">

* Patient database search tool
<img src="https://i.ibb.co/yVVtD9G/image.png" width="800">

### Epic DEMO:

Video: Click on the image
[![Cancer](https://i.ibb.co/p1MvBJF/Logo.png)](https://youtu.be/GYoLvldvk-s)

Sorry github does not allow embed videos.

## Future Rollout:

 inventa algo

## References:

Links 

## Apendix A:

Install.sh Content:

    export PATH=$PATH:~/.local/bin

    sudo apt-get update 

    sudo apt-get upgrade -y 

    sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev -y 

    sudo apt-get install python3-pip -y 

    sudo pip3 install -U pip testresources setuptools

    sudo pip3 install -U numpy==1.16.1 future==0.17.1 mock==3.0.5 h5py==2.9.0 keras_preprocessing==1.0.5 keras_applications==1.0.8 gast==0.2.2 enum34 futures protobuf 

    sudo pip3 install --pre --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v43 tensorflow-gpu 

    sudo pip3 install notebook awscli paho-mqtt

    sudo apt-get install python3-matplotlib python3-opencv python3-scipy -y 

[Return to Libraries Setup](#libraries-setup)