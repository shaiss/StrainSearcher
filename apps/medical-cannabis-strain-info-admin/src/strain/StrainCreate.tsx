import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StrainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="imageURL" source="imageUrl" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
