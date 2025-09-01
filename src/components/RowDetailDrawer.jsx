import { Button, Drawer, Space, Input, Switch, Select, message } from "antd";
import { useState, useEffect } from "react";

const RowDetailDrawer = ({ open, onClose, rowData, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (rowData) {
      setFormData({
        ...rowData
      });
    }
  }, [rowData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
      message.success("Row updated successfully!");
      onClose();
    }
  };

  return (
    <Drawer
      title={`Row Detail - ${formData?.name || "Noma'lum"}`}
      placement="right"
      width={400}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button style={{ borderColor: 'black', color: 'black' }} onClick={onClose}>Cancel</Button>
          <Button style={{ backgroundColor: 'black', color: 'white' }} type="primary" onClick={handleSave}>
            Save
          </Button>
        </Space>
      }
    >
      {formData ? (
        <div className="space-y-4">
          <div>
            <label className="font-bold">ID:</label>
            <p className="bg-gray-200 rounded px-2 py-1">{formData.id}</p>
          </div>

          <div>
            <label className="font-bold">Email:</label>
            <Input
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="font-bold">Email Visible:</label>
            <Switch
              checked={!!formData.emailVisibility}
              onChange={(val) => handleChange("emailVisibility", val)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="font-bold">Verified:</label>
            <Switch
              checked={!!formData.verified}
              onChange={(val) => handleChange("verified", val)}
            />
          </div>

          <div>
            <label className="font-bold">Name:</label>
            <Input
              value={formData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <label className="font-bold">Language:</label>
            <Input
              value={formData.language || ""}
              onChange={(e) => handleChange("language", e.target.value)}
            />
          </div>

          <div>
            <label className="font-bold">Phone:</label>
            <Input
              value={formData.phoneNumber || ""}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </div>

          <div>
            <label className="font-bold">Role:</label>
            <Select
              value={formData.role || "user"}
              onChange={(val) => handleChange("role", val)}
              className="w-full"
            >
              <Select.Option value="user">User</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <label className="font-bold">Paid:</label>
            <Switch
              checked={!!formData.isPaid}
              onChange={(val) => handleChange("isPaid", val)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="font-bold">Active:</label>
            <Switch
              checked={!!formData.isActive}
              onChange={(val) => handleChange("isActive", val)}
            />
          </div>

          <div>
            <label className="font-bold">Created:</label>
            <p>{formData.created}</p>
          </div>

          <div>
            <label className="font-bold">Updated:</label>
            <p>{formData.updated}</p>
          </div>
        </div>
      ) : (
        <p>Hech qanday ma'lumot tanlanmagan</p>
      )}
    </Drawer>
  );
};

export default RowDetailDrawer;
