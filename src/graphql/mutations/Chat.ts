import { gql } from '@apollo/client';

export const CREATE_MESSAGE_MUTATION = gql`
mutation createMessage($input: MessageInput!) {
  createMessage(input: $input) {
    message {
      id
      body
      sender {
        id
      }
      receiver {
        id
      }
      type
      flow
    }
  }
}
`;