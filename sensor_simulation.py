import serial
import time
import schedule
import requests

def main_func():
    try:
        # Replace 'COM16' with the correct port for your Arduino
        arduino = serial.Serial('COM16', 9600, timeout=1)
        print('Established serial connection to Arduino')
        
        while True:
            arduino_data = arduino.readline().decode("utf-8").strip()
            if not arduino_data:
                continue
            print(arduino_data)
            

            try:
                pulse_rate = float(arduino_data)
                print(f'Pulse Rate: {pulse_rate} bpm')
                send_to_backend(pulse_rate)
                
            except ValueError as e:
                print(f'Error parsing pulse rate data: {arduino_data} - {e}')

    except serial.SerialException as e:
        print(f'Error: {e}')
    except Exception as e:
        print(f'Unexpected error: {e}')
    finally:
        if 'arduino' in locals() and arduino.is_open:
            arduino.close()
            print('Connection closed')
        print('<----------------------------->')

def send_to_backend(pulse_rate):
    try:
        url = 'http://localhost:8000/api/temperature-data'
        payload = {
            'patient_id': '4VN3VWDQq7UkZI5bvkkDj4Ghm8d2',  # Replace with actual patient ID
            'temperature': pulse_rate
        }
        response = requests.post(url, json=payload)
        if response.status_code == 200:
            print("Data sent successfully")
        else:
            print(f"Failed to send data: {response.status_code}")
    except Exception as e:
        print(f"Exception occurred while sending data: {e}")

# Main Code
print('Program started')

# Schedule the main function to run periodically
schedule.every(10).seconds.do(main_func)

while True:
    schedule.run_pending()
    time.sleep(1)