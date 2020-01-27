import getpass
import os

def fan_speed(speed):
    password = 'toor'
    command = "sudo -S sh -c 'echo " + str(speed) + " > /sys/devices/pwm-fan/target_pwm'" 
    check = os.system('echo %s | %s' % (password, command))
    print(check)