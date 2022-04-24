import { Modal } from 'antd';

const Questionairre = ({visible, handleCancel, handleOk}) => {

    return (
        <Modal
            title="Questionnaire"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>questionairre</p>
        </Modal>
    )
}
export default Questionairre;