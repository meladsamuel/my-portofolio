import { forwardRef, Fragment, useReducer, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import LoadingButton from '@mui/lab/LoadingButton';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Transition(props) {
  return <Slide {...props} direction="left" />;
}
const initialState = {
  form: { name: '', email: '', content: '' },
  errors: {},
  loading: false,
  response: { type: 'success', message: '' },
};
const formReducer = (state, action) => {
  switch (action.type) {
    case 'onChange':
      const oldState = { ...state };
      oldState.form[action.payload.name] = action.payload.value;
      return oldState;
    case 'onSend':
      return { ...state, loading: true, errors: {} };
    case 'onError':
      return { ...state, errors: action.payload, loading: false };
    case 'removeResponse':
      return { ...state, response: {} };
    case 'onComplete':
      return {
        form: { name: '', email: '', content: '' },
        errors: {},
        loading: false,
        response: {
          type: action.payload.type,
          message: action.payload.message,
        },
      };
  }
};
const postData = async (form) => {
  const response = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
  if (!response.ok)
    throw new Error('your message can not receive you can try later');
  return await response.json();
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const formValidate = () => {
    let err = {};
    if (!state.form.name) err.name = 'Please insert your name';
    if (!state.form.email)
      err.email = 'please insert your email to response to you';
    if (!state.form.content) err.content = 'Please put your message';
    return err;
  };

  const handleChange = (event) => {
    dispatch({ type: 'onChange', payload: event.target });
  };

  const handleClose = async () => dispatch({ type: 'removeResponse' });

  const handleSubmit = async (event) => {
    dispatch({ type: 'onSend' });
    event.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length > 0)
      return dispatch({ type: 'onError', payload: { ...errs } });
    try {
      const data = await postData(state.form);
      dispatch({ type: 'onComplete', payload: data });
    } catch (e) {
      console.log(e);
      dispatch({
        type: 'onComplete',
        payload: { type: 'error', message: e.message },
      });
    }
  };

  return (
    <Fragment>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{ '& > :not(style)': { mt: 2 } }}
      >
        <TextField
          fullWidth
          name="name"
          value={state.form.name}
          label="Full Name"
          variant="outlined"
          onChange={handleChange}
          error={Boolean(state.errors.name)}
          helperText={state.errors?.name}
        />
        <TextField
          fullWidth
          name="email"
          value={state.form.email}
          label="Email"
          variant="outlined"
          type="email"
          onChange={handleChange}
          error={Boolean(state.errors.email)}
          helperText={state.errors?.email}
        />
        <TextField
          fullWidth
          multiline
          name="content"
          value={state.form.content}
          label="Message"
          variant="outlined"
          minRows={3}
          maxRows={10}
          onChange={handleChange}
          error={Boolean(state.errors.content)}
          helperText={state.errors?.content}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            loading={state.loading}
            type="submit"
            color="primary"
            variant="contained"
            loadingPosition="end"
            endIcon={<SendIcon />}
          >
            Send
          </LoadingButton>
        </Box>
      </Box>
      <Snackbar
        open={Boolean(state.response.message)}
        onClose={handleClose}
        TransitionComponent={Transition}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="message"
      >
        <Alert
          onClose={handleClose}
          severity={state.response.type}
          sx={{ width: '100%' }}
        >
          {state.response.message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Form;
