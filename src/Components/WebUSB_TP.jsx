import React, { useState } from "react";
import icons from "./icons";

const WebUSB_TP = ({ template }) => {

  const handleUSBPrint = async () => {
    try {
      // Request access to any USB device
      const device = await navigator.usb.requestDevice({ filters: [] });
      await device.open();
      if (device.configuration === null) await device.selectConfiguration(1);
      await device.claimInterface(0);

      // Dynamically detect the OUT endpoint
      const endpoint = device.configuration.interfaces[0].alternates[0].endpoints.find(
        (ep) => ep.direction === "out"
      );

      if (!endpoint) {
        throw new Error("No OUT endpoint found for this USB device.");
      }

      const endpointNumber = endpoint.endpointNumber;

      // Convert the template to bytes
      const encoder = new TextEncoder();
      const data = encoder.encode(template);

      // Send the data to the detected endpoint
      await device.transferOut(endpointNumber, data);
      await device.close();

      alert("Receipt printed successfully via USB!");
    } catch (error) {
      console.error("USB Printing Error:", error);
      alert(`Failed to print via USB. Error: ${error.message}`);
    }
  };

  return (
    <>
      <button onClick={handleUSBPrint}><span>{icons.usb} </span>Print via USB</button>
    </>
  );
};

export default WebUSB_TP;
