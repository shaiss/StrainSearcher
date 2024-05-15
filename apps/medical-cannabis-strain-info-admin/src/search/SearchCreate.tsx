import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SearchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="searchedAt" source="searchedAt" />
        <TextInput label="searchResults" multiline source="searchResults" />
        <TextInput label="strainName" source="strainName" />
      </SimpleForm>
    </Create>
  );
};
