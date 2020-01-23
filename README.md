# Anaphylactic-Skin-Reaction-Detection-during-Chemotherapy

Anaphylactic Skin Reaction Detection during Chemotherapy

<img src="https://i.ibb.co/p1MvBJF/Logo.png" width="500">

# Table of contents

* [Introduction](#introduction)
* [Materials](#materials)
* [Connection Diagram](#connection-diagram)
* [Brainium Setup](#brainium-setup)
* [CloudMQTT Setup](#cloudmqtt-setup)
* [Laptop Setup](#laptop-setup)
* [Arm Setup](#arm-setup)
* [The Final Product](#the-final-product)
* [Future Rollout](#future-rollout)
* [References](#references)

## Introduction:

Nowadays we have serious problems in healthcare. Despite the fact that many of them have already been solved with technology, many times the industry is reluctant to change and adopt new technologies. 

Cancer patients, for example, have to be treated with chemotherapy continuously, however this process is not simple or pleasant. The worst part of this, is the possibility of being allergic to chemotherapy. Approximately 12 percent of patients who are treated in chemotherapy have an allergic reaction to it, which can trigger a simple blush to death. This is a very studied phenomenon which have several symptoms and phases. One of the main symptoms (1) before severe anaphylaxis in this type of treatment is flushing of the face, after that there may be symptoms such as:

<img src="https://i.ibb.co/bmLWkqG/image.png" width="1000">

If the first symptoms regarding flushing, blushing and facial redness can be detected faster, we can avoid most of the more severe ones by administering treatment promptly.

This problem is quite severe and happens even in top of the line hospitals (2). Personally I worked in one of these, and to my surprise these kinds of reactions happen quite often and I think that AI and CV technologies have the capability to tend to this problem faster and directly so medical professionals can have a faster reaction to it.

(1) https://ctep.cancer.gov/protocolDevelopment/electronic_applications/docs/CTCAE_v5_Quick_Reference_8.5x11.pdf
(2) https://www.ncbi.nlm.nih.gov/books/NBK333506/table/ch04.sec1.table1/

## Materials:

Hardware:
- SmartEdge Agile                                  x1.
https://www.avnet.com/wps/portal/us/solutions/iot/building-blocks/smartedge-agile/
- Robotic Arm                                      x1.
https://www.amazon.com/OWI-Robotic-Soldering-Required-Extensive/dp/B0017OFRCY
- ESP32                                            x2.
https://www.adafruit.com/product/3405
- Standed-Core Wire                                x1.
https://www.adafruit.com/product/2987
- 8 Channel DC 5V Relay Module with Optocoupler    x1.
https://www.amazon.com/Elegoo-Module-Optocoupler-Arduino-Raspberry/dp/B07F623PHG

Software:
- Anrduino IDE.
- Python Anaconda.
- Cloud MQTT.

## Connection Diagram:

This is the connection diagram of the system:

<img src="https://i.ibb.co/TTHwbv7/Digram-Rehab.png" width="800">

Arm Connection Diagram:

<img src="https://hackster.imgix.net/uploads/attachments/942233/68747470733a2f2f692e6962622e636f2f4832344451384e2f41524d2d62622e706e67.png" width="800">

## Brainium Setup:

### Model Training:

Before performing any other task, it was vital to be able to generate a model for elbow rehabilitation, the system can be extended to any rehabilitation but we chose elbow as the first sample.

4 basic movements were programmed for the rehabilitation of the elbow, of which 3 of them will be used in the final rehabilitation.

Elbow flexoextension:

<img src="https://i.ibb.co/qkX5VfF/image.png" width="400">
<img src="https://i.ibb.co/RBY7K7L/image.png" width="400">

Arm Lift:

<img src="https://i.ibb.co/CzXGq2v/image.png" width="400">
<img src="https://i.ibb.co/XZdHHrS/image.png" width="400">

Elbow Flexion:

<img src="https://i.ibb.co/jkJ4qfd/image.png" width="400">
<img src="https://i.ibb.co/hDrN088/image.png" width="400">

This is the model that was developed and the number of repetitions for each movement:

<img src="https://i.ibb.co/mbXWD8T/image.png" width="400">

Model motion confusion matrix:

<img src="https://i.ibb.co/m4jWHMt/image.png" width="400">

### Widget Configuration:

Press the button to create the widget.

<img src = "https://i.ibb.co/zZSCtkK/image.png" width = "500">

We assign the model to the device.

<img src = "https://i.ibb.co/wC98Vs3/image.png" width = "500">

We create a widget as shown in the image.

<img src = "https://i.ibb.co/tD5b4F3/image.png" width = "500">

We finish the widget.

<img src = "https://i.ibb.co/dkB1cJ0/image.png" width = "500">

We will get a result like the following.

<img src = "https://i.ibb.co/2shLmdn/image.png" width = "500">

### Obtaining Credentials.

Save External access token and User ID.

<img src = "https://i.ibb.co/DCcdzCP/image.png" width = "500">

## CloudMQTT Setup:

Create an account in Cloud MQTT.

https://www.cloudmqtt.com/

Copy the credentials of "Server", "User", "Password" and "Port".

<img src = "https://i.ibb.co/s9wR395/image.png" width = "1000">

## Laptop Setup:

Install Python Anaconda so that you can easily manipulate the MQTT broker, this had to be done because the Arduino library ESP32 for MQTT does not accept connectivity such as Websocket.

https://www.anaconda.com/distribution/

Then install this library:

    pip install paho-mqtt

Download the file Python Files, open "MQTTRehab.py" and put your credentials.

## Arm Setup:

Follow this diagram without making a mistake, IF YOU DON'T CONNECT IT WELL YOU CAN DO A SHORT CIRCUIT:

<img src="https://hackster.imgix.net/uploads/attachments/942233/68747470733a2f2f692e6962622e636f2f4832344451384e2f41524d2d62622e706e67.png" width="800">

After connecting all program the ESP32 with the code in the "Arduino Files" folder.

<img src="https://www.e-ika.com/images/thumbs/0005376_placa-esp32-wifi-bluetooth_600.jpeg" width="800">

Open the "ESP32ARMRehab.ino" file and enter the CloudMQTT credentials.

    const char* ssid = "YOURSSID";
    const char* password =  "YOURPASS";
    const char* mqttServer = "m12.cloudmqtt.com";
    const int mqttPort = 12345;
    const char* mqttUser = "YOURCLOUDMQTTUSER";
    const char* mqttPassword = "YOURCLOUDMQTTPASS";

## The Final Product:

Robotic Arm:

<img src="https://i.ibb.co/X3JNNLB/DSC00056-2.jpg" width="800">
<img src="https://i.ibb.co/HHM2DQ1/DSC00059-2.jpg" width="800">

ESP32 Arm Driver:

<img src="https://i.ibb.co/mJ73KNs/DSC00068.jpg" width="800">

Brainium Module:

<img src="https://i.ibb.co/cFZrYdJ/DSC00061-2.jpg" width="800">
<img src="https://i.ibb.co/kgds0Xn/DSC00062-2.jpg" width="800">
<img src="https://i.ibb.co/xFm1f0T/DSC00063-2.jpg" width="800">

Complete system:

<img src="https://i.ibb.co/dMb7c6V/DSC00066-2.jpg" width="800">

### Our Epic DEMO:

Video: Click on the image
[![Rehab](https://i.ibb.co/Bjg48mh/Brainium-Rehab.png)](https://youtu.be/GYoLvldvk-s)

Sorry github does not allow embed videos.

## Future Rollout:

 inventa algo

## References:

Links 























Setup:

export PATH=$PATH:~/.local/bin && sudo apt-get update && sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev -y && sudo apt-get install python3-pip -y && sudo pip3 install -U pip testresources setuptools && sudo pip3 install -U numpy==1.16.1 future==0.17.1 mock==3.0.5 h5py==2.9.0 keras_preprocessing==1.0.5 keras_applications==1.0.8 gast==0.2.2 enum34 futures protobuf && sudo pip3 install --pre --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v43 tensorflow-gpu
    
    
    python3
    
    import tensorflow
    
    