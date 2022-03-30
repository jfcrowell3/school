import React from 'react';

const EditableRow = ({
  editFormData,
  handleCancelClick,
  handleEditFormChange,
}) => {
  return (
    <tr>
      <td>
        <input
          required
          className="editInput"
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          required
          className="editInput"
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          required
          className="editInput"
          type="text"
          name="age"
          placeholder="Enter age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          required
          className="editInput"
          type="text"
          name="grade"
          placeholder="Enter grade"
          value={editFormData.grade}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button className="updateButton" type="submit">
          Save
        </button>
        <button onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
