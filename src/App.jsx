
import { useState } from 'react';
import Form from './Form';
import Card from './Card';  // Fixed the import path here.

const App = () => {
    const [values, setValues] = useState({ firstInput: '', secondInput: '' });
    const [error, setError] = useState(null);
    const [submittedData, setSubmittedData] = useState(null);

    const onInputChange = (name, value) => {
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (values.firstInput.trim().length < 3 || values.firstInput.startsWith(' ')) {
            setError("Please check that the information is correct.");
            setSubmittedData(null);
            return;
        }

        if (values.secondInput.length < 6) {
            setError("Please check that the information is correct.");
            setSubmittedData(null);
            return;
        }

        setError(null);
        setSubmittedData(values);
    };

    return (
        <div>
            <Form onSubmit={onSubmit} onInputChange={onInputChange} values={values} />
            {error && <div>{error}</div>}
            {submittedData && <Card data={submittedData} />}
        </div>
    );
}

export default App;
