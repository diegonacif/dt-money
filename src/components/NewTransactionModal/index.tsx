import * as Dialog from '@radix-ui/react-dialog';

import { CloseButton, Content, NewTransationModalContainer, Overlay } from "./styles";
import { X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size="24" />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
