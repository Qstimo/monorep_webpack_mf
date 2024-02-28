import React from 'react'
import cls from './Form.module.scss'
import { Box, Button, Center, Flex, TagLabel, Text } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { validate } from 'webpack'
interface FormProps {
    className?: string
}
const validateEmail = (value: string) => {
    if (!value) return "Required"
    else if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/i.test(value)) {
        return 'Invalid email address'
    }
}
const validatePassword = (value: string) => {
    if (!value) return "Required"
}

export const FormSub = ({ className }: FormProps) => {
    return <Formik
        initialValues={
            {
                email: '',
                password: '',
            }
        }
        onSubmit={values => {

            console.log('submit', values)
        }}
    >
        {({ errors, touched }) => (
            <Box m={'6'} >
                <Center  >
                    <Form >
                        <Flex w={'700px'} flexDirection={'column'} gap={'4'}>
                            <Text as={'label'} color={errors.email && touched.email && 'red'}>
                                Email
                            </Text>
                            <Field
                                name='email'
                                validate={validateEmail}
                                placeholder='Email'
                            />
                            {errors.email && touched.email && (
                                <Text color={'red.500'}>{errors.email}</Text>
                            )}
                            <Text as={'label'} color={errors.password && touched.password && 'red'}>
                                Password
                            </Text>
                            <Field
                                name='password'
                                type='password'
                                validate={validatePassword}
                                placeholder='Password'
                            />
                            {errors.password && touched.password && (
                                <Text color={'red.500'}>{errors.password}</Text>
                            )}
                            <Button type='submit'>Sub</Button>
                        </Flex>
                    </Form>
                </Center>
            </Box>
        )}
    </Formik >

}