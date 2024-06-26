import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          marcas: "BRANDS",
          tenis: "SHOES",
          skate: "SKATE",
          roupas: "CLOTHES",
          acessorios: "ACCESSORIES",
          inputPlaceholder: "Search the Shop",
          pageGridTitle: "Top Offers",
          poweredBy: "Powered by",
          conector: "and",
          returnSearchPage: "return to search page:",
          selectSize: "select size: ",
          quantity: "Quantity",
          conector2: "or",
          conector3: "in",
          tamanhoP: "P",
          tamanhoM: "M",
          tamanhoG: "G",
          addCartButton: "Add to Cart",
          buyNowButton: "Buy Now",
          pageGridTitle2: "Interesting products for you:",
          yourLilCart: "Your cart",
          emptyCartMsg: "Your cart is empty",
          subtotalCart: "Subtotal:",
          finalizePurchase: "Finalize purchase",
          forgotPassword: "I forgot my password",
          enter: "ENTER",
          alreadyCustumer: "I'm already a customer",
          noRegistered: "I don't have a registration yet",
          register: "REGISTER",
          password: "Password",
          name: "Name",
          telephone: "Telephone",
          dataNascimento: "Date of Birth",
          confirmPassword: "Confirm Password",
          addProduct: "ADD PRODUCT",
          listProduct: "LIST PRODUCT",
          editProduct: "EDIT PRODUCT",
          listUser: "LIST USERS",
          addProduct2: "Add Product",
          description: "Description",
          imagem: "Image",
          valor: "Value",
          tamanho: "Size",
          adicionar: "ADD",
          descriptionPlaceholder: "Made of wood",
          namePlaceholder: "A crazy shape...",
          registerError: "Error registering product. Please check the fields and try again.",
          registeredProductSucefully: "Product registered successfully!",
          updateProduct: "UPDATE PRODUCT",
          updateProductAlertMsg: "Product updated successfully!",
          failedUpdatedMsg: "Failed to update the product",
          pedidos: "REQUESTS",
          dados: "DATA",
          enderecos: "ADRESSES",
          paymentMethods: "PAYMENT METHODS",
          exit: "LOGOUT",
          cleanRequests: "Clear order detail",
          yourRequestListIsEmpty: "Your order list is empty",
          pedidos2: "Requests",
          pedidos3: "Order",
          pedidoDetalhe: "Order Details",
          data2: "Date",
          totalValue: "Amount",
          buyedItens: "Purchased Items",
          selectedOrder: "Selected a order!",
          failedRegister: "Failed to register!",
          dadosAtualizados: "Data updated successfully",
          erroAoAtualizar: "Error updating data: ",
          pessoalData: "Personal data",
          saveChanges: "Save editions",
          shippingDetails: "Shipping Data",
          productDeleted: "Product deleted successfully!",
          deletedError: "Error deleting product. Try again later.",
          productList: "List of products",
          userDeleted: "User deleted successfully!",
          userDeletedError: "Error deleting user",
          tryAgainLatter: "Try again later",
          listOfUsers: "List of Users",
          registerError2: "Failed to register!",
          searchFor: "Search for",
          allProducts: "All the products",
          searchNoReturnResults: "The search returned no results",
          orderSend: "order sent successfully",
          orderSendFailed: "Error completing the order",
          finishYourOrder: "Complete your purchase",
          orderValue: "Value of the order",
          finishOrder: "Finalize order",
          sneakers: "sneaker", 
          shoe: "shoe", 
          boot: "boot", 
          slipper: "slipper",
          highTop: "high top", 
          lowTop: "low top",
          decks: "decks", 
          wheels: "wheels", 
          hardware: "hardware", 
          reissues: "reissues", 
          safety: "safety itens",
          tShirt: "tShirt",
          flannel: "flannels",
          hats: "hats",
          beanie: "beanies",
          short: "shorts",
          jacket: "jacket",
          hoodie: "hoodie",
          polo: "polo",
          reglan: "reglan",
          patches: "patches",
          stickers: "sticker",
          plankets: "planket",
          sunglas: "sunglas",
          randomItems: "random itens",
          buttonsPins: "button & pins",
          stickerPacks: "sticker packs",
        }
      },
      es: {
        translation: {
          marcas: "MARCAS",
          tenis: "TENIS",
          skate: "SKATE",
          roupas: "ROPA",
          acessorios: "ACESSORIOS",
          inputPlaceholder: "Buscar en la tienda",
          pageGridTitle: "Ofertas principales",
          poweredBy: "Desarrollado por",
          conector: "y",
          returnSearchPage: "volver a la página de búsqueda:",
          selectSize: "selecciona el tamaño: ",
          quantity: "Cantidad",
          conector2: "o",
          conector3: "en",
          tamanhoP: "S",
          tamanhoM: "M",
          tamanhoG: "L",
          addCartButton: "Agregar al carrito",
          buyNowButton: "Comprar ahora",
          pageGridTitle2: "Productos interesantes para ti:",
          yourLilCart: "Tu carrito",
          emptyCartMsg: "Su cesta está vacía",
          subtotalCart: "Total parcial:",
          finalizePurchase: "Finalizar compra",
          forgotPassword: "Olvide mi contraseña",
          enter: "ENTRAR",
          alreadyCustumer: "Ya soy cliente",
          noRegistered: "Aún no tengo registro",
          register: "REGISTRO",
          password: "Contraseña",
          name: "Nombre",
          telephone: "Teléfono",
          dataNascimento: "Fecha de Nacimiento",
          confirmPassword: "Confirmar Seña",
          addProduct: "AGREGAR PRODUCTO",
          listProduct: "LISTAR PRODUCTO",
          listUser: "LISTAR USUARIOS",
          addProduct2: "Agregar Producto",
          description: "Descripción",
          imagem: "Imagen",
          valor: "Valor",
          tamanho: "Tamaño",
          adicionar: "AGREGAR",
          descriptionPlaceholder: "Hecho de madera",
          namePlaceholder: "Muy belo shape",
          registerError: "Error al registrar el producto. Por favor revisa los campos y vuelve a intentarlo.",
          registeredProductSucefully: "¡Producto registrado exitosamente!",
          editProduct: "EDITAR PRODUCTO",
          updateProduct: "ACTUALIZAR PRODUCTO",
          updateProductAlertMsg: "¡Producto actualizado exitosamente!",
          failedUpdatedMsg: "No se pudo actualizar el producto",
          pedidos: "PETICIONES",
          dados: "DATOS",
          enderecos: "DIRECCIONES",
          paymentMethods: "MÉTODOS DE PAGO",
          exit: "SALIR",
          cleanRequests: "Borrar detalle del pedido",
          yourRequestListIsEmpty: "Tu lista de pedidos está vacía",
          pedidos2: "Peticiones",
          pedidos3: "Orden",
          pedidoDetalhe: "Detalles del pedido",
          data2: "Fecha",
          totalValue: "Valor Total",
          buyedItens: "Elementos comprados",
          selectedOrder: "¡Selecione una orden!",
          failedRegister: "¡Fallo el registro!",
          dadosAtualizados: "Datos actualizados exitosamente",
          erroAoAtualizar: "Error al actualizar datos: ",
          pessoalData: "Datos personales",
          saveChanges: "Guardar ediciones",
          shippingDetails: "Datos de envio",
          productDeleted: "¡Producto eliminado exitosamente!",
          deletedError: "Error al eliminar el producto. Vuelve a intentarlo más tarde.",
          productList: "Lista de productos",
          userDeleted: "¡Usuario eliminado exitosamente!",
          userDeletedError: "Error al eliminar usuario",
          tryAgainLatter: "Vuelve a intentarlo más tarde",
          listOfUsers: "Lista de Usuarios",
          registerError2: "¡Fallo el registro!",
          searchFor: "Busca por",
          allProducts: "Todos los productos",
          searchNoReturnResults: "La búsqueda no arrojó resultados.",
          orderSend: "pedido enviado exitosamente",
          orderSendFailed: "Error al completar el pedido",
          finishYourOrder: "Completa tu compra",
          orderValue: "Valor del pedido",
          finishOrder: "Finalizar pedido",
          sneakers: "zapatilla deporte", 
          shoe: "zapato", 
          boot: "bota", 
          slipper: "zapatilla",
          highTop: "cana alta", 
          lowTop: "cana baja",
          decks: "cubiertas", 
          wheels: "ruedas", 
          hardware: "ferros", 
          reissues: "reediciones", 
          safety: "itens de seguridad",
          tShirt: "camiseta",
          flannel: "pantalones de franela",
          hats: "sombreros",
          beanie: "gorros",
          short: "bermudas",
          jacket: "chaquetas",
          hoodie: "sudaderas con capucha",
          polo: "polo",
          reglan: "reglan",
          patches: "parches",
          stickers: "pegatinas",
          plankets: "planchas",
          sunglas: "gafas de sol",
          randomItems: "articulos aleatorios",
          buttonsPins: "botones y alfileres",
          stickerPacks: "paquete de pegatinas",
        } 
      },
      pt: {
        translation: {
          marcas: "MARCAS",
          tenis: "TÊNIS",
          skate: "SKATE",
          roupas: "ROUPAS",
          acessorios: "ACESSÓRIOS",
          inputPlaceholder: "Procurar na loja",
          pageGridTitle: "Principais ofertas",
          poweredBy: "Desenvolvido por",
          conector: "e",
          returnSearchPage: "voltar para pagina de busca:",
          selectSize: "selecione o tamanho: ",
          quantity: "Quantidade",
          conector2: "ou",
          conector3: "em",
          tamanhoP: "P",
          tamanhoM: "M",
          tamanhoG: "G",
          addCartButton: "Adicionar ao carrinho",
          buyNowButton: "Comprar agora",
          pageGridTitle2: "Produtos interessantes pra você:",
          yourLilCart: "Seu carrinho",
          emptyCartMsg: "Seu carrinho está vazio",
          subtotalCart: "Subtotal:",
          finalizePurchase: "Finalizar compra",
          forgotPassword: "Esqueci minha senha",
          enter: "ENTRAR",
          alreadyCustumer: "Já sou cliente",
          noRegistered: "Ainda não tenho cadastro",
          register: "REGISTRAR",
          password: "Senha",
          name: "Nome",
          telephone: "Telefone",
          dataNascimento: "Data de Nascimento",
          confirmPassword: "Confirmar Senha",
          addProduct: "ADICIONAR PRODUTO",
          listProduct: "LISTAR PRODUTO",
          editProduct: "EDITAR PRODUTO",
          listUser: "LISTAR USUARIOS",
          addProduct2: "Adicionar Produto",
          description: "Descrição",
          imagem: "Imagem",
          valor: "Valor",
          tamanho: "Tamanho",
          adicionar: "ADICIONAR",
          descriptionPlaceholder: "Feito de madeira",
          namePlaceholder: "Um shape maneira",
          registerError: "Erro ao cadastrar produto. Verifique os campos e tente novamente.",
          registeredProductSucefully: "Produto cadastrado com sucesso!",
          updateProduct: "ATUALIZAR PRODUTO",
          updateProductAlertMsg: "Produto atualizado com sucesso!",
          failedUpdatedMsg: "Falha ao atualizar o produto",
          pedidos: "PEDIDOS",
          dados: "DADOS",
          enderecos: "ENDEREÇOS",
          paymentMethods: "MÉTODOS DE PAGAMENTO",
          exit: "SAIR",
          cleanRequests: "Limpar detalhe do pedido",
          yourRequestListIsEmpty: "Sua lista de pedidos está vazia",
          pedidos2: "Pedidos",
          pedidos3: "Pedido",
          pedidoDetalhe: "Detalhes do Pedido",
          data2: "Data",
          totalValue: "Valor Total",
          buyedItens: "Itens comprados",
          selectedOrder: "Selecione um pedido!",
          failedRegister: "Falha ao registrar!",
          dadosAtualizados: "Dados atualizados com sucesso",
          erroAoAtualizar: "Erro ao atualizar os dados: ",
          pessoalData: "Dados Pessoais",
          saveChanges: "Salvar Alterações",
          shippingDetails: "Dados de Envio",
          productDeleted: "Produto excluído com sucesso!",
          deletedError: "Erro ao excluir produto. Tente novamente mais tarde.",
          productList: "Lista de produtos",
          userDeleted: "Usuario excluído com sucesso!",
          userDeletedError: "Erro ao excluir usuario",
          tryAgainLatter: "Tente novamente mais tarde",
          listOfUsers: "Lista de Usuarios",
          registerError2: "Falha ao registrar!",
          searchFor: "Busca por",
          allProducts: "Todos os produtos",
          searchNoReturnResults: "A busca não retornou resultados",
          orderSend: "pedido enviado com sucesso",
          orderSendFailed: "Erro ao finalizar o pedido",
          finishYourOrder: "Finalize sua compra",
          orderValue: "Valor do pedido",
          finishOrder: "Finalizar pedido",
          sneakers: "tenis", 
          shoe: "sapato", 
          boot: "bota", 
          slipper: "chinelo",
          highTop: "cano alto", 
          lowTop: "cano longo",
          decks: "decks", 
          wheels: "rodas", 
          hardware: "ferros", 
          reissues: "reedicoes", 
          safety: "itens de seguranca",
          tShirt: "camiseta",
          flannel: "flanelas",
          hats: "chapeus",
          beanie: "gorros",
          short: "shorts",
          jacket: "jaquetas",
          hoodie: "moletom",
          polo: "polo",
          reglan: "reglan",
          patches: "patches",
          stickers: "adesivos",
          plankets: "pranchas",
          sunglas: "oculos de sol",
          randomItems: "itens aleatorios",
          buttonsPins: "botoes & alfinete",
          stickerPacks: "pacotes de adesivos",
        }
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
