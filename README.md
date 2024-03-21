# Quadruped Spider: The Surveillance Robot
Welcome to our project build for Smart Bengal Hackathon 2K24! Our quadruped spider surveillance robot, controlled by a Raspberry Pi Zero W and Arduino Uno, offers a unique blend of agility and surveillance capabilities. With its four legs and array of sensors, including cameras and microphones, the robot is designed for tasks such as home security, outdoor exploration, and educational demonstrations.

## Features
Agile Movement: The spider-like design allows for smooth and agile movement, making it ideal for navigating various terrains.
Surveillance Capabilities: Equipped with cameras and microphones, the robot can monitor its surroundings and transmit live video and audio feed.
Remote Control: Control the robot remotely using a web interface, accessing live video feed and controlling its movements.
Educational Tool: The project serves as an educational tool for learning about robotics, programming, and electronics.

## Getting Started
To get started with our project, check out the docs folder for detailed instructions on setting up the Raspberry Pi Zero W and Arduino Uno, as well as how to access the web interface for controlling the robot.

You can get the instructions to build this project from here: 

You can download the STL files from https://www.thingiverse.com/thing:4815137

## Components
I have used the following components in this project:
1. Arduino UNO (Required)
2. Raspberry Pi Zero W
3. Raspberry Pi camera
4. 5v to 3.3v Logic level shifter
5. Arduino UNO Sensor Shield (Required)
6. SG90 Mini Servo 12 pieces (Required)
7. Buck Converter Lm2596
8. Lithium Ion Battery 3 pieces
9. Leds * 2 piece
10. Jumper Wires

## Requirements
1. Python 3.7.3
2. Flask 1.0.2

## Run
To run the web control interface:
```
cd web_control
python3 web_control.py
```
To run the speech control system:
```
cd picovoice
python3 demo/python/picovoice_demo_mic.py 
	--keyword_path resources/porcupine/resources/keyword_files/raspberry-pi/bumblebee_raspberry-pi.ppn  
	--context_path your_rhino_model
```

## Acknowledgments

* https://picovoice.ai/
* https://elinux.org/RPi-Cam-Web-Interface

## License
This project is licensed under the MIT License - see the LICENSE file for details.

We hope you enjoy exploring the capabilities of our quadruped spider surveillance robot! If you have any questions or feedback, please don't hesitate to reach out.

**Team Quadruped Spider: The Surveillance Robot**
