import { useForm } from 'react-hook-form';

const NewStudent = ({ addStudent }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="addForm"
      onSubmit={handleSubmit((data) => {
        addStudent(data);
        alert('Form Sent!');
      })}
    >
      <h1>Add Student</h1>
      <label>First Name</label>
      <input
        {...register('firstName')}
        type="text"
        placeholder="First Name"
        required
      />
      <label>Last Name</label>
      <input
        {...register('lastName')}
        type="text"
        placeholder="Last Name"
        required
      />
      <label>Age</label>
      <input {...register('age')} type="text" placeholder="Age" required />
      <label>Grade</label>
      <input {...register('grade')} type="text" placeholder="Grade" required />
      <input type="submit" className="submitButton" />
    </form>
  );
};

export default NewStudent;
