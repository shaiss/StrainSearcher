import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SearchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="searchedAt" source="searchedAt" />
        <TextInput label="searchResults" multiline source="searchResults" />
        <TextInput label="strainName" source="strainName" />
      </SimpleForm>
    </Edit>
  );
};
