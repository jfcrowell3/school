import StudentDirectory from './StudentDirectory';

function Students({
  isLoading,
  fetchError,
  studentList,
  removeStudent,
  editStudentId,
  editFormData,
  handleEditClick,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) {
  return (
    <main>
      {fetchError && (
        <p
          style={{
            color: 'red',
            textAlign: 'center',
            padding: '4rem',
            fontSize: '30px',
          }}
        >{`Error: ${fetchError}`}</p>
      )}
      {isLoading && (
        <p style={{ textAlign: 'center', padding: '4rem', fontSize: '36px' }}>
          Loading items...
        </p>
      )}
      {!isLoading && !fetchError && (
        <StudentDirectory
          studentList={studentList}
          removeStudent={removeStudent}
          editStudentId={editStudentId}
          editFormData={editFormData}
          handleEditClick={handleEditClick}
          handleEditFormChange={handleEditFormChange}
          handleCancelClick={handleCancelClick}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      )}
    </main>
  );
}

export default Students;
