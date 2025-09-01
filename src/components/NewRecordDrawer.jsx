import { Button, Drawer, Space } from 'antd';

function NewRecordDrawer({ open, onClose }) {
    return (
        <Drawer
            // title={`Row Detail - ${rowData?.name || "Noma'lum"}`}
            placement="right"
            width={400}
            onClose={onClose}
            open={open}
            extra={
                <Space>
                    <Button style={{borderColor: 'black', color: 'black'}} onClick={onClose}>Cancel</Button>
                    <Button style={{backgroundColor: 'black'}} type="primary" onClick={onClose}>
                        Create
                    </Button>
                </Space>
            }
        >
            <p>Yangi data qo'shish</p>
        </Drawer>
    );
}

export default NewRecordDrawer