import { useCallback, useState } from "react";
import { Position } from "reactflow";
import { CreateNode, FieldConfig, createHandle } from "./CreateNode";

export const NehraNode = ({ id, data }) => {
  const title = "Nehra";
  const handles = [
    createHandle({
      id: `${id}-input1`,
      type: "target",
      position: Position.Left,
      style: { top: "30%" },
    }),
    createHandle({
      id: `${id}-input2`,
      type: "target",
      position: Position.Left,
      style: { top: "70%" },
    }),
    createHandle({
      id: `${id}-output1`,
      type: "source",
      position: Position.Right,
      style: { top: "30%" },
    }),
    createHandle({
      id: `${id}-output2`,
      type: "source",
      position: Position.Right,
      style: { top: "70%" },
    }),
  ];
  const [values, setValues] = useState({
    lastName: data?.lastName || "Nehra",
    status: data?.status || "active",
  });

  const handleChange = useCallback(
    (key) => (newValue) =>
      setValues((prev) => ({
        ...prev,
        [key]: newValue,
      })),
    []
  );
  const fields = [
    FieldConfig.text("lastName", "Last Name", handleChange("lastName")),
    FieldConfig.select("status", "Status", [
      { value: "active", label: "Selected" },
      { value: "inactive", label: "Rejected" },
      { value: "pending", label: "Pending" },
    ], handleChange("status")),
  ];
  const style = {
    minHeight: 120,
  };

  return CreateNode({
    title,
    handles,
    fields,
    values,
    baseStyle: { style },
  });
};
