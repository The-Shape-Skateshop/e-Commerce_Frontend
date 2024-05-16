import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Passa o i18n para o react-i18next
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
          editProduct: "Edit Product",
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
          editProduct: "EDITAR PRODUCTO",
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
          editProduct: "Editar Producto",
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
          editProduct: "Editar Produto",
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
        }
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React já faz a escapada
    }
  });

export default i18n;
