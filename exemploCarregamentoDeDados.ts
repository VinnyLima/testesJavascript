interface OptionsAutocomplete {
  label: string;
  value: string;
}

const [empresasOption, setEmpresasOption] = useState<OptionsAutocomplete[]>([]);
const [usuariosOption, setUsuariosOption] = useState<OptionsAutocomplete[]>([]);
const [equipamentosOption, setEquipamentosOption] = useState<
  OptionsAutocomplete[]
>([]);
const [aplicativosOption, setAplicativosOption] = useState<
  OptionsAutocomplete[]
>([]);

async function carregarDadosParaPreenchimento(): Promise<void> {
  try {
    //Caregamento dos dados de empresas
    await api
      .get<IResponseEmpresas>("/empresas", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const newListOptionEmpresas = response.data.data.map((empresa) => {
          return { label: empresa.nomeEmpresa, value: empresa.id };
        });

        setEmpresasOption(newListOptionEmpresas);
      });

    //Caregamento dos dados de Usuarios
    await api
      .get<Usuarios[]>("/usuarios", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const novosDadosOpcoesUsuarios = response.data.map((usuario) => {
          return {
            label: usuario.nome + " " + usuario.sobreNome,
            value: usuario.id,
          };
        });

        setUsuariosOption(novosDadosOpcoesUsuarios);
      });

    //Caregamento dos dados de equipamentos
    await api
      .get<IResponseEquipamentos>("/equipamento", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const novosDadosOpcoesEquipamentos = response.data.data.map(
          (equipamento) => {
            return {
              label: equipamento.dsEquipamento,
              value: equipamento.id,
            };
          }
        );
        setEquipamentosOption(novosDadosOpcoesEquipamentos);
      });

    //Caregamento dos dados de aplicativo
    await api
      .get<IResponseAplicativos>("/aplicativo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const novosDadosOpcoesAplicativos = response.data.data.map(
          (aplicativo) => {
            return { label: aplicativo.dsAplicativo, value: aplicativo.id };
          }
        );
        setAplicativosOption(novosDadosOpcoesAplicativos);
      });
  } catch (error) {
    console.error(error);
  }
}

const carregarValoresPerfilEmpresa = useCallback(
  async (idPerfilEmpresa: string) => {
    SetIdPerfilEmpresa(idPerfilEmpresa);

    const respAutoAcesso = await api.get<IResponseAutorizacaoAcesso>(
      `/autorizacaoAcesso/${idPerfilEmpresa}`,
      {
        headers: {
          Authorization: "Berear " + token,
        },
      }
    );
    const dadosAuto = respAutoAcesso.data.data;

    console.log(dadosAuto);

    setEmpresaEdit(
      empresasOption.find((empresa) => {
        empresa.value === dadosAuto.cdEmpresa;
        return empresa;
      })
    );

    setUsuarioEdit(
      usuariosOption.find((usuario) => {
        usuario.value === dadosAuto.cdUsuario;
        return usuario;
      })
    );

    setEquipamentoEdit(
      equipamentosOption.find((equipamento) => {
        equipamento.value === dadosAuto.cdEquipamento;
        return equipamento;
      })
    );

    setAplicativoEdit(
      aplicativosOption.find((aplicativo) => {
        aplicativo.value === dadosAuto.cdAplicativo;
        return aplicativo;
      })
    );
  },
  [empresasOption]
);

<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
className={classes.modal}
open={open}
disableBackdropClick={true}
closeAfterTransition={true}
BackdropComponent={Backdrop}
BackdropProps={{
  timeout: 500,
}}
>
<Fade in={open}>
  <div className={style.formAddUsuario}>
    <section>
      <h3 id="transition-modal-title">Nova Autorização de Acesso</h3>
      <button onClick={handleClose}>
        <Clear />
      </button>
    </section>
    <Form
      ref={formRef}
      onSubmit={criarAutorizacaoAcesso}
      id="transition-modal-description"
    >
      <div className={style.selectModulo}>
        <AutocompleteNew
          name="cdEmpresa"
          nameLabel="Empresa"
          options={empresasOption}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione uma empresa"
        />

        <AutocompleteNew
          name="cdUsuario"
          nameLabel="Usuário"
          options={usuariosOption}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione um Usuário"
        />
        <AutocompleteNew
          name="cdEquipamento"
          nameLabel="Equipamento"
          options={equipamentosOption}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione um equipamento"
        />
        <AutocompleteNew
          name="cdAplicativo"
          nameLabel="Aplicativo"
          options={aplicativosOption}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione um aplicativo"
        />
        <SelectForms name="flSituacao">
          <option value="">Selecione uma Situação</option>
          <option value={0}>Em Análise</option>
          <option value={1}>Aguardando Aprovação</option>
        </SelectForms>
      </div>

      <div className={style.fisrtData}></div>

      <div className={style.buttonAdd}>
        <button type="submit">Cadastrar Perfil Empresa</button>
      </div>
      {openAlert && <Alert severity="error">{messageError}</Alert>}
    </Form>
  </div>
</Fade>
</Modal>
<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
className={classes.modal}
open={openEdit}
disableBackdropClick={true}
closeAfterTransition={true}
BackdropComponent={Backdrop}
BackdropProps={{
  timeout: 500,
}}
>
<Fade in={openEdit}>
  <div className={style.formAddUsuario}>
    <section>
      <h3 id="transition-modal-title">Aprovar Autorização</h3>
      <button onClick={handleCloseEdit}>
        <Clear />
      </button>
    </section>
    <Form
      ref={formRefEdit}
      onSubmit={atualizarPerfilEmpresa}
      id="transition-modal-description"
    >
      <div className={style.selectModulo}>
        <AutocompleteNew
          name="cdEmpresa"
          nameLabel="Empresa"
          options={empresasOption}
          formatGroupLabel={formatGroupLabel}
          defaultValue={{
            label: empresaEdit?.label,
            value: empresaEdit?.value,
          }}
          placeholder="Selecione uma empresa"
          isDisabled
        />

        <AutocompleteNew
          name="cdUsuario"
          nameLabel="Usuário"
          options={usuariosOption}
          defaultValue={{
            label: usuarioEdit?.label,
            value: usuarioEdit?.value,
          }}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione um Usuário"
          isDisabled
        />
        <AutocompleteNew
          name="cdEquipamento"
          nameLabel="Equipamento"
          options={equipamentosOption}
          defaultValue={{
            label: equipamentoEdit?.label,
            value: equipamentoEdit?.value,
          }}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione um equipamento"
          isDisabled
        />
        <AutocompleteNew
          name="cdAplicativo"
          nameLabel="Aplicativo"
          options={aplicativosOption}
          defaultValue={{
            label: aplicativoEdit?.label,
            value: aplicativoEdit?.value,
          }}
          formatGroupLabel={formatGroupLabel}
          placeholder="Selecione um aplicativo"
          isDisabled
        />
        <SelectForms name="flSituacao">
          <option value="">Selecione uma Situação</option>
          <option value={0}>Em Análise</option>
          <option value={1}>Aguardando Aprovação</option>
        </SelectForms>
      </div>
      <div className={style.buttonAdd}>
        <button type="submit">Atualizar Perfil</button>
      </div>
      {openAlert && <Alert severity="error">{messageError}</Alert>}
    </Form>
  </div>
</Fade>
</Modal>
