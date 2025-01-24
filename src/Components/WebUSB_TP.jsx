import React from "react";
import icons from "./icons";

const WebUSB_TP = ({ template }) => {
  const handleUSBPrint = async () => {
    try {
      // Request access to any USB device
      const device = await navigator.usb.requestDevice({ filters: [] });
      await device.open();
      if (device.configuration === null) await device.selectConfiguration(1);
      await device.claimInterface(0);

      // Convert the template to bytes
      const encoder = new TextEncoder();
      const data = encoder.encode(template);

      // Send the data to the printer
      await device.transferOut(1, data);
      await device.close();

      alert("Receipt printed successfully via USB!");
    } catch (error) {
      console.error("USB Printing Error:", error);
      alert("Failed to print via USB. Ensure the printer is connected and try again.");
    }
  };

  return (
    <>
      <button onClick={handleUSBPrint} className="usb-btn"><span>{icons.usb} </span>Print via USB</button>
    </>
  );
};

export default WebUSB_TP;
