import { Drawer } from "antd";

const RowDetailDrawer = ({ open, onClose, rowData }) => {
  return (
    <Drawer
      title={`Row Detail - ${rowData?.name || "Noma'lum"}`}
      placement="right"
      width={400}
      onClose={onClose}
      open={open}
    >
      {rowData ? (
        <div>
          <p><b>ID:</b> {rowData.id}</p>
          <p><b>Name:</b> {rowData.name}</p>
          <p><b>Description:</b> {rowData.description}</p>
          <p><b>Price:</b> {rowData.price}</p>
        </div>
      ) : (
        <p>Hech qanday ma'lumot tanlanmagan</p>
      )}
    </Drawer>
  );
};

export default RowDetailDrawer;
