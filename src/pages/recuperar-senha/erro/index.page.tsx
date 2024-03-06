import Image from "next/image";
import Seo from "@/components/Seo";
import TrocaImagensAutomatica from "@/components/SliderImage";
import { useRouter } from "next/router";
import { Bloco, Flex, Page, Text, DivLink } from "./styles";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <>
      <Seo
        title="Redefinição de Senha"
        description="Pagina para realizar redefinição de senha  do aplicativo Líder da Associação Brasileira de Ontopsicologia"
      />

      <Page>
        <TrocaImagensAutomatica />
        <Bloco>
          <Flex>
            <Image
              src="/images/Favico-AppLider2023.png"
              alt="Descrição da imagem"
              width={85}
              height={80}
              style={{ borderRadius: "10px" }}
            />
            <DivLink>
              <h1>Link de Recuperação de Senha Inválido</h1>
              <p>Gere um novo link por favor!</p>
              <p>Mais informações entre em contato via <a href ="https://api.whatsapp.com/send?phone=555599136380&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20suporte%20do%20aplicativo%20L%C3%ADder.">WhatsApp.</a></p>
            </DivLink>
          </Flex>
          <Text>
            <p>
              Desenvolvido por Imago Dev | © Associação Brasileira de
              Ontopsicologia
            </p>
          </Text>
        </Bloco>
      </Page>
    </>
  );
}
