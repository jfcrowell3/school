const ReadOnlyRow = ({ student, handleEditClick, removeStudent }) => {
  return (
    <tr key={student.id}>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.age}</td>
      <td>{student.grade}</td>
      <td>
        <button
          className="updateButton"
          type="button"
          onClick={(e) => handleEditClick(e, student)}
        >
          Edit
        </button>
        <button
          student={student}
          className="deleteButton"
          onClick={() => removeStudent(student.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
