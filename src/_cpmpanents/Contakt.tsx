import { DatePicker, Form, Input, InputNumber, Modal } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contakt() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="bg-black hover:bg-gray-800 transition-colors text-[#ffe000] font-semibold px-8 py-3 rounded-lg w-full max-w-[250px]"
      >
        {t("intro.goToCourses")}
      </button>

      <Modal
        title={null}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        className="custom-dark-modal"
      >
        <div className="bg-black p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("intro.modalTitle") || "Приглашаем на первый урок!"}
          </h2>
          <Form layout="vertical">
            <Form.Item
              name="name"
              label={<span className="text-white">Name</span>}
            >
              <Input className="bg-gray-800 text-white border-none" />
            </Form.Item>
            <Form.Item
              name="secondName"
              label={<span className="text-white">Second name</span>}
            >
              <Input className="bg-gray-800 text-white border-none" />
            </Form.Item>
            <Form.Item
              name="phone"
              label={<span className="text-white">Phone number</span>}
            >
              <InputNumber className="bg-gray-800 text-white border-none" />
            </Form.Item>
            <Form.Item
              name="age"
              label={<span className="text-white">Age</span>}
            >
              <DatePicker />{" "}
            </Form.Item>

            <button
              onClick={handleOk}
              className="mt-4 bg-[#ffe000] hover:bg-yellow-300 transition-colors text-black font-semibold px-6 py-2 rounded-lg"
            >
              {t("intro.send") || "Yuborish"}
            </button>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default React.memo(Contakt);
