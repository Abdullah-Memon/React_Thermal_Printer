import React from "react";
import icons from "./icons";

const WebBluetooth_TP = ({ template }) => {
  const handleBluetoothPrint = async () => {
    try {
      // Request access to any Bluetooth device
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true, // Accept any device
        optionalServices: [] // Optional services can be dynamically determined
      });
      const server = await device.gatt.connect();
      const services = await server.getPrimaryServices();

      // Find a writable characteristic dynamically
      let writeCharacteristic;
      for (const service of services) {
        const characteristics = await service.getCharacteristics();
        writeCharacteristic = characteristics.find((char) =>
          char.properties.write
        );
        if (writeCharacteristic) break;
      }

      if (!writeCharacteristic) {
        throw new Error("No writable characteristic found.");
      }

      // Convert the template to bytes
      const encoder = new TextEncoder();
      const data = encoder.encode(template);

      // Write the data to the printer
      await writeCharacteristic.writeValue(data);
      await server.disconnect();

      alert("Receipt printed successfully via Bluetooth!");
    } catch (error) {
      console.error("Bluetooth Printing Error:", error);
      alert("Failed to print via Bluetooth. Ensure the printer is connected and try again.");
    }
  };

  return (
    <>
      <button onClick={handleBluetoothPrint} className="bluetooth-btn">
        <span>{icons.bluetooth} </span>
        Print via Bluetooth
        </button>
    </>
  );
};

export default WebBluetooth_TP;
