function Device({ device }) {
   return (
      device && (
         <tr>
            <td>{device.description}</td>
            <td>{device.address}</td>
            <td>{device.energyConsumption}</td>
         </tr>
      )
   );
}

export default Device;
