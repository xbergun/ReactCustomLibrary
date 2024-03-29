import styled from 'styled-components'

const CustomStyles= styled.div`
padding: 1rem;
text-align: center;
justify-content: center;
margin-left: 20%;
table {
    background-color: white;
  border-spacing: 0;
  border: 1px solid black;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    :last-child {
      border-right: 0;
    }
  }
}
`
export default CustomStyles