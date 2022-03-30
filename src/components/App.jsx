import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import Layout from '../pages/Layout';
import NewStudent from '../pages/New_student';
import Students from '../pages/Students';
import axios from 'axios';
import { useEffect, useState } from 'react';

const STUDENTS_ENDPOINT = 'http://localhost:3000/students';

const App = () => {
  const [studentList, setStudentList] = useState([]);
  const [editStudentId, setEditStudentId] = useState(null);
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    grade: '',
  });

  const addStudent = (student) => {
    const newStudent = [...studentList, student];
    setStudentList(newStudent);
    axios.post(STUDENTS_ENDPOINT, student);
  };

  async function removeStudent(id) {
    const newStudentList = studentList.filter((student) => student.id !== id);
    setStudentList(newStudentList);
    await axios.delete(`${STUDENTS_ENDPOINT}/${id}`);
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedStudent = {
      id: editStudentId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      age: editFormData.age,
      grade: editFormData.grade,
    };

    const newStudents = [...studentList];

    const index = studentList.findIndex(
      (student) => student.id === editStudentId,
    );

    newStudents[index] = editedStudent;

    setStudentList(newStudents);
    setEditStudentId(null);
    axios.patch(`${STUDENTS_ENDPOINT}/${editStudentId}`, editedStudent);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (e, student) => {
    e.preventDefault();
    setEditStudentId(student.id);

    const formValues = {
      firstName: student.firstName,
      lastName: student.lastName,
      age: student.age,
      grade: student.grade,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditStudentId(null);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const resp = await axios.get(STUDENTS_ENDPOINT);
        setStudentList(resp.data);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout studentList={studentList} />}>
          <Route
            index
            element={
              <Students
                fetchError={fetchError}
                isLoading={isLoading}
                addStudent={addStudent}
                studentList={studentList}
                removeStudent={removeStudent}
                editStudentId={editStudentId}
                editFormData={editFormData}
                handleEditClick={handleEditClick}
                handleEditFormChange={handleEditFormChange}
                handleEditFormSubmit={handleEditFormSubmit}
                handleCancelClick={handleCancelClick}
              />
            }
          />
          <Route
            path="newStudent"
            element={<NewStudent addStudent={addStudent} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
