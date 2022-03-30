import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';

const StudentDirectory = ({
  studentList,
  removeStudent,
  editStudentId,
  editFormData,
  handleEditClick,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) => {
  return (
    <>
      <h1>Student Directory</h1>
      {studentList.length ? (
        <form className="tableForm" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <>
                  {editStudentId === student.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleCancelClick={handleCancelClick}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      student={student}
                      removeStudent={removeStudent}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
      ) : (
        <p
          style={{
            margin: 'auto',
            textAlign: 'center',
            fontSize: '26px',
            backgroundColor: 'white',
            boxShadow: '2px 2px 5px black',
            width: '50%',
            padding: '2rem',
          }}
        >
          No students saved, add a student.
        </p>
      )}
    </>
  );
};

export default StudentDirectory;
