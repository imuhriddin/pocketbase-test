import { Button, Drawer, Input, message, Select, Space, Switch } from 'antd';
import { useEffect, useState } from 'react';

function NewRecordDrawer({ open, onClose, rowData, onSave, isCreate }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (rowData) {
            setFormData({ ...rowData });
        } else if (isCreate) {
            // Yangi row uchun bo'sh form
            setFormData({
                email: "",
                emailVisibility: false,
                verified: false,
                name: "",
                language: "",
                phoneNumber: "",
                role: "user",
                isPaid: false,
                isActive: true,
            });
        }
    }, [rowData, isCreate]);

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        if (onSave) {
            onSave(formData); // Bu callback parent componentga yuboradi
            message.success(isCreate ? "Row created successfully!" : "Row updated successfully!");
            onClose();
        }
    };

    return (
        <Drawer
            title={isCreate ? "Create New Row" : `Row Detail - ${formData?.name || "Noma'lum"}`}
            placement="right"
            width={400}
            onClose={onClose}
            open={open}
            extra={
                <Space>
                    <Button style={{ borderColor: 'black', color: 'black' }} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} type="primary" onClick={handleSave}>
                        {isCreate ? "Create" : "Save"}
                    </Button>
                </Space>
            }
        >
            <div className="space-y-4">
                <div>
                    <label className="font-bold">Email:</label>
                    <Input value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                </div>

                <div className="flex items-center justify-between">
                    <label className="font-bold">Email Visible:</label>
                    <Switch checked={!!formData.emailVisibility} onChange={(val) => handleChange("emailVisibility", val)} />
                </div>

                <div className="flex items-center justify-between">
                    <label className="font-bold">Verified:</label>
                    <Switch checked={!!formData.verified} onChange={(val) => handleChange("verified", val)} />
                </div>

                <div>
                    <label className="font-bold">Name:</label>
                    <Input value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
                </div>

                <div>
                    <label className="font-bold">Language:</label>
                    <Input value={formData.language} onChange={(e) => handleChange("language", e.target.value)} />
                </div>

                <div>
                    <label className="font-bold">Phone:</label>
                    <Input value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
                </div>

                <div>
                    <label className="font-bold">Role:</label>
                    <Select value={formData.role} onChange={(val) => handleChange("role", val)} className="w-full">
                        <Select.Option value="user">User</Select.Option>
                        <Select.Option value="admin">Admin</Select.Option>
                    </Select>
                </div>

                <div className="flex items-center justify-between">
                    <label className="font-bold">Paid:</label>
                    <Switch checked={!!formData.isPaid} onChange={(val) => handleChange("isPaid", val)} />
                </div>

                <div className="flex items-center justify-between">
                    <label className="font-bold">Active:</label>
                    <Switch checked={!!formData.isActive} onChange={(val) => handleChange("isActive", val)} />
                </div>
            </div>
        </Drawer>
    );
}

export default NewRecordDrawer