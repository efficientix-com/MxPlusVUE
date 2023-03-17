<template>
  <div>
    <!-- Botón para accionar stepper de config de proveedores -->
    <div>
      <div class="btn btn--green-1" @click="onClickBtn">
        Nuevo EFX-Configuración Portal Proveedores
      </div>
    </div>
    <br />
    <!-- Lista -->
    <div id="list">
      <table>
        <thead>
          <th>Acciones</th>
          <th>Internal ID</th>
          <th>Nombre</th>
        </thead>
        <tbody>
          <tr v-for="item in configurations" :key="item.id">
            <td>
              <span
                class="btnTriggerModal"
                @click="
                  showModal = !showModal;
                  isBeingEdited = false;
                  idToEdit = item.id;
                  idModalToView = configurations
                    .map((e) => e.id)
                    .indexOf(item.id);
                  splitSelectedBlockList();
                  splitSelectedWarningList();
                "
                >Edit</span
              >
              |
              <span
                class="btnTriggerModal"
                @click="
                  showModal = !showModal;
                  idModalToView = configurations
                    .map((e) => e.id)
                    .indexOf(item.id);
                  splitSelectedBlockList();
                  splitSelectedWarningList();
                  isBeingEdited = true;
                "
                >view</span
              >
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- SUCCESS MODAL -->
    <div
      :class="
        showModalSuccess ? 'modal-overlay shown' : 'modal-overlay modalHidden'
      "
      v-show="showModalSuccess"
      @click="showModalSuccess = false"
    >
      <div class="modal-sm" @click.stop>
        <div class="modalHeader">
          <div
            class="close msgModal"
            @click="showModalSuccess = !showModalSuccess"
          >
            <font-awesome-icon icon="fa-solid fa-rectangle-xmark" size="3x" />
          </div>
        </div>
        <div>
          <div>
            <h4>{{ msgAlert }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- modal formulario -->
    <div
      :class="showModal ? 'modal-overlay shown' : 'modal-overlay modalHidden'"
      class="modal-overlay"
      v-show="showModal"
      @click="showModal = false"
    >
      <div class="modal" @click.stop>
        <div class="modalHeader">
          <div>
            <h4>{{ configurations[idModalToView].name }}</h4>
          </div>
          <div class="close" @click="showModal = !showModal">
            <font-awesome-icon icon="fa-solid fa-rectangle-xmark" size="3x" />
          </div>
        </div>
        <div class="modalBody">
          <!-- Navegación del modal -->
          <div class="modalNav">
            <h5
              :class="navModal.generales ? 'activeLink mt-2' : 'mt-2'"
              @click="changeNav(true, false, false, false)"
            >
              Generales
            </h5>
            <h5
              :class="navModal.correos ? 'activeLink mt-2' : 'mt-2'"
              @click="changeNav(false, true, false, false)"
            >
              Envío de correos
            </h5>
            <h5
              :class="navModal.listasNegras ? 'activeLink mt-2' : 'mt-2'"
              @click="changeNav(false, false, true, false)"
            >
              Listas negras
            </h5>
            <h5
              :class="navModal.archivos ? 'activeLink mt-2' : 'mt-2'"
              @click="changeNav(false, false, false, true)"
            >
              Archivos
            </h5>
          </div>
          <div class="modalContent">
            <!-- Información de generales -->
            <div id="generales" v-show="navModal.generales">
              <div class="row rowModal mt-2 mr-0">
                <div class="column">
                  <label for="txtName">Nombre</label>
                  <input
                    type="text"
                    name="txtName"
                    ref="name"
                    :disabled="isBeingEdited"
                    :value="configurations[idModalToView].name"
                  />
                  <small
                    class="danger-text"
                    v-show="msgAlert.includes('Error')"
                    >{{ msgAlert }}</small
                  >
                </div>
                <div class="column">
                  <div class="row">
                    <input
                      type="checkbox"
                      name="inactiveCheck"
                      ref="isinactive"
                      id="inactiveCheck"
                      :disabled="isBeingEdited"
                      :checked="configurations[idModalToView].isinactive"
                    />
                    <label for="inactiveCheck">Inactivo</label>
                  </div>
                </div>
              </div>
              <div class="row mr-0">
                <div class="column">
                  <div class="row rowModal mr-0 mt-2">
                    <input
                      type="checkbox"
                      name="limitTransQuantity"
                      id="limitTransQuantity"
                      ref="custrecord_efx_pp_tran_limit"
                      :disabled="isBeingEdited"
                      :checked="
                        configurations[idModalToView]
                          .custrecord_efx_pp_tran_limit
                      "
                    />
                    <label for="limitTransQuantity"
                      >Limitar a cantidad en transacción</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--  Envío de correos-->
            <div id="envioCorreos" v-show="navModal.correos">
              <div class="row rowModal mr-0">
                <div class="email">
                  <div class="column">
                    <label for="txtAsuntoCorreo">Título de correo</label>
                    <input
                      type="text"
                      name="txtAsuntoCorreo"
                      id="txtAsuntoCorreo"
                      ref="custrecord_efx_pp_mail_subjec"
                      class="asuntoEmail"
                      :disabled="isBeingEdited"
                      :value="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mail_subjec
                      "
                    />
                  </div>
                </div>
                <div class="email">
                  <div class="column">
                    <label for="txtCorreo">Cuerpo de correo</label>
                    <textarea
                      name="txtCorreo"
                      id="txtCorreo"
                      ref="custrecord_efx_pp_mail_body"
                      class="txtAreaEmail emailTextArea"
                      rows="5"
                      :disabled="isBeingEdited"
                      :value="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mail_body
                      "
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row rowModal mr-0">
                <div class="email">
                  <div class="column">
                    <label for="txtAsuntoCorreo">Título de correo error</label>
                    <input
                      type="text"
                      name="txtAsuntoCorreoError"
                      id="txtAsuntoCorreoError"
                      ref="custrecord_efx_pp_mail_subject_error"
                      class="asuntoEmail"
                      :disabled="isBeingEdited"
                      :value="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mail_subject_error
                      "
                    />
                  </div>
                </div>
                <div class="email">
                  <div class="column">
                    <label for="txtCorreo">Cuerpo de correo error</label>
                    <textarea
                      name="txtCorreoError"
                      id="txtCorreoError"
                      ref="custrecord_efx_pp_mail_body_error"
                      class="txtAreaEmail emailTextArea"
                      rows="5"
                      :disabled="isBeingEdited"
                      :value="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mail_body_error
                      "
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <!--  Listas Negras-->
            <div id="listasNegras" v-show="navModal.listasNegras">
              <div class="row rowModal mr-1">
                <div class="column columnSelectEdit mt-2">
                  <div>
                    <label for="blockStatus">Block Status</label>
                  </div>

                  <!-- Arreglo de multiselect -->
                  <div class="multiselect">
                    <div class="leftSelect">
                      <div
                        :class="selected.text !== '' ? 'cheto' : ''"
                        v-for="(selected, index) in selectedBlockListConfig"
                        :key="selected.value"
                      >
                        {{
                          selected.text == "" ? "sin definir" : selected.text
                        }}
                        <font-awesome-icon
                          class="circleXMark"
                          icon="fa-solid 
                            fa-circle-xmark"
                          size="1x"
                          v-if="selected.text !== ''"
                          @click="
                            removeOptionBWList(
                              selected.value,
                              selected.text,
                              true
                            )
                          "
                        />
                        <br v-if="index % 2 != 0" />
                      </div>
                    </div>
                    <div class="rightSelect">
                      |
                      <font-awesome-icon
                        @click="showDropdownBlock = !showDropdownBlock"
                        class="dropdownChevron"
                        icon="fa-solid fa-circle-chevron-down"
                        size="1x"
                      />
                    </div>
                  </div>
                  <!-- Dropdown del multiselect -->
                  <div v-show="showDropdownBlock" class="multiselectDropdown">
                    <div v-for="block in auxBlockStatusList" :key="block.value">
                      <div
                        @click="
                          pushSelectedBWList(block.value, block.text, true)
                        "
                      >
                        {{ block.text }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column columnSelectEdit mt-2 mr-0">
                  <div>
                    <label for="warningStatus">Warning Status</label>
                  </div>
                  <!-- Arreglo de multiselect -->
                  <div class="multiselect">
                    <div class="leftSelect">
                      <div
                        :class="selected.text !== '' ? 'cheto' : ''"
                        v-for="(selected, index) in selectedWarningListConfig"
                        :key="selected.value"
                      >
                        {{
                          selected.text == "" ? "sin definir" : selected.text
                        }}
                        <font-awesome-icon
                          class="circleXMark"
                          icon="fa-solid 
                            fa-circle-xmark"
                          size="1x"
                          v-if="selected.text !== ''"
                          @click="
                            removeOptionBWList(
                              selected.value,
                              selected.text,
                              false
                            )
                          "
                        />
                        <br v-if="index % 2 != 0" />
                      </div>
                    </div>
                    <div class="rightSelect">
                      |
                      <font-awesome-icon
                        @click="showDropdownWarning = !showDropdownWarning"
                        class="dropdownChevron"
                        icon="fa-solid fa-circle-chevron-down"
                        size="1x"
                      />
                    </div>
                  </div>
                  <!-- Dropdown del multiselect -->
                  <div v-show="showDropdownWarning" class="multiselectDropdown">
                    <div v-for="warn in auxWarningStatusList" :key="warn.value">
                      <div @click="pushSelectedBWList(warn.value, warn.text)">
                        {{ warn.text }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row rowModal">
                <div class="column columnSelect mt-2">
                  <div>
                    <label for="txtWarning">Warning message</label>
                  </div>
                  <div>
                    <textarea
                      name="txtWarning"
                      id="txtWarning"
                      class="txtAreaEmail"
                      rows="5"
                      ref="custrecord_efx_pp_warn_message"
                      :disabled="isBeingEdited"
                      :value="
                        configurations[idModalToView]
                          .custrecord_efx_pp_warn_message
                      "
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <!--  Archivos-->
            <div id="archivos" v-show="navModal.archivos">
              <div class="row rowModal mt-2 mr-0">
                <div class="column">
                  <div class="row">
                    <input
                      type="checkbox"
                      name="pdfMandatory"
                      id="pdfMandatory"
                      ref="custrecord_efx_pp_mandatory_pdf"
                      :disabled="isBeingEdited"
                      :checked="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mandatory_pdf
                      "
                    />
                    <label for="pdfMandatory">PDF Mandatory</label>
                  </div>
                </div>
                <div class="column">
                  <div class="row">
                    <input
                      type="checkbox"
                      name="xmlMandatory"
                      id="xmlMandatory"
                      ref="custrecord_efx_pp_mandatory_xml"
                      :disabled="isBeingEdited"
                      :checked="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mandatory_xml
                      "
                    />
                    <label for="xmlMandatory">XML Mandatory</label>
                  </div>
                </div>
              </div>
              <div class="row rowModal mr-0">
                <div class="column">
                  <div class="row">
                    <input
                      type="checkbox"
                      name="evidenceMandatory"
                      id="evidenceMandatory"
                      ref="custrecord_efx_pp_mandatory_ev"
                      :disabled="isBeingEdited"
                      :checked="
                        configurations[idModalToView]
                          .custrecord_efx_pp_mandatory_ev
                      "
                    />
                    <label for="evidenceMandatory">Evidence Mandatory</label>
                  </div>
                </div>
                <div class="column">
                  <div class="row">
                    <label for="txtExtension">Ext. for evidence</label>
                    <input
                      type="text"
                      name="txtExtension"
                      ref="custrecord_efx_pp_extencion_ev"
                      :disabled="isBeingEdited"
                      :value="
                        configurations[idModalToView]
                          .custrecord_efx_pp_extencion_ev
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modalFooter">
          <!-- Botón de Guardar -->
          <div class="row rowModalBtn" v-show="!isBeingEdited">
            <div class="column">
              <div class="btn btn--green-1" @click="editRecord(idToEdit)">
                Guardar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import axios from "axios";

export default {
  name: "SupplierValidatorComponent",
  data() {
    return {
      isBeingEdited: true,
      idToEdit: null,
      msgAlert: "",
      navModal: {
        generales: true,
        correos: false,
        listasNegras: false,
        archivos: false,
      },
      configurations: [
        // {
        //   id: "1",
        //   name: "Ejemplo",
        //   custrecord_efx_pp_block_status: [
        //     {
        //       value: "1",
        //       text: "Definitivos",
        //     },
        //   ],
        //   custrecord_efx_pp_mail_body_error: "Ejemplo",
        //   custrecord_efx_pp_mail_body: "Ejemplo",
        //   custrecord_efx_pp_mandatory_ev: true,
        //   custrecord_efx_pp_extencion_ev: "jpg,png,jpeg,rar",
        //   isinactive: true,
        //   custrecord_efx_pp_tran_limit: true,
        //   custrecord_efx_pp_mandatory_pdf: true,
        //   custrecord_efx_pp_mail_subject_error: "Ejemplo",
        //   custrecord_efx_pp_mail_subjec: "Ejemplo",
        //   custrecord_efx_pp_warn_message: "Ejemplo",
        //   custrecord_efx_pp_warn_status: [
        //     {
        //       value: "1",
        //       text: "Definitivos",
        //     },
        //   ],
        //   custrecord_efx_pp_mandatory_xml: true,
        // },
        // {
        //   id: "2",
        //   name: "Nombrecito",
        //   custrecord_efx_pp_block_status: [
        //     {
        //       value: "1,3,4",
        //       text: "Definitivos2,Presuntos,Sentencias favorables",
        //     },
        //   ],
        //   custrecord_efx_pp_mail_body_error:
        //     "Cuerpo de correo de error ejemplo",
        //   custrecord_efx_pp_mail_body: "Cuerpo de correo sin errores",
        //   custrecord_efx_pp_mandatory_ev: true,
        //   custrecord_efx_pp_extencion_ev: "jpeg,rar",
        //   isinactive: true,
        //   custrecord_efx_pp_tran_limit: true,
        //   custrecord_efx_pp_mandatory_pdf: true,
        //   custrecord_efx_pp_mail_subject_error: "Asunto de correo de error",
        //   custrecord_efx_pp_mail_subjec: "Asunto del correo",
        //   custrecord_efx_pp_warn_message: "Mensaje de alerta",
        //   custrecord_efx_pp_warn_status: [
        //     {
        //       value: "1",
        //       text: "Definitivos2",
        //     },
        //     {
        //       value: "3",
        //       text: "Presuntos",
        //     },
        //   ],
        //   custrecord_efx_pp_mandatory_xml: true,
        // },
      ],
      showModal: false,
      showModalSuccess: false,
      idModalToView: 0,
      // *******************VARIABLES DE BLOCK STATUS LCO*************************
      showDropdownBlock: false,
      blockStatusList: [
        // {
        //   value: "1",
        //   text: "Definitivos2",
        // },
        // {
        //   value: "2",
        //   text: "Desvirtuados",
        // },
        // {
        //   value: "3",
        //   text: "Presuntos",
        // },
        // {
        //   value: "4",
        //   text: "Sentencias favorables",
        // },
      ],
      selectedBlockListConfig: [
        // {
        //   value: "1,2,4",
        //   text: "Definitivos2,Desvirtuados,Sentencias favorables",
        // },
      ],
      blockStatusListNew: [],
      auxBlockStatusList: [],

      // *******************VARIABLES DE WARNING STATUS *************************
      showDropdownWarning: false,
      warningStatusList: [
        // {
        //   value: "1",
        //   text: "Definitivos2",
        // },
        // {
        //   value: "2",
        //   text: "Desvirtuados",
        // },
        // {
        //   value: "3",
        //   text: "Presuntos",
        // },
        // {
        //   value: "4",
        //   text: "Sentencias favorables",
        // },
      ],
      selectedWarningListConfig: [
        // {
        //   value: "1,2,4",
        //   text: "Definitivos2,Desvirtuados,Sentencias favorables",
        // },
      ],
      warningStatusListNew: [],
      auxWarningStatusList: [],
    };
  },
  created() {
    this.getConfigurations();
    this.getBlockStatusList();
  },
  methods: {
    removeOptionBWList(key, text, isBlockStatus) {
      if (isBlockStatus == true) {
        console.log("Remove: ", key);
        if (this.selectedBlockListConfig) {
          let newSelectedBlockStatusList = this.selectedBlockListConfig.filter(
            (element) => element.value !== key
          );
          this.selectedBlockListConfig = newSelectedBlockStatusList;
          console.log(this.selectedBlockListConfig);
          this.auxBlockStatusList.push({
            value: key,
            text: text,
          });
        }
      } else {
        console.log("Remove WARNING: ", key);
        if (this.selectedWarningListConfig) {
          let newSelectedWarningListConfig =
            this.selectedWarningListConfig.filter(
              (element) => element.value !== key
            );
          this.selectedWarningListConfig = newSelectedWarningListConfig;
          console.log(this.selectedBlockListConfig);
          this.auxWarningStatusList.push({
            value: key,
            text: text,
          });
        }
      }
    },
    // removeOptionBlockList(key, text) {
    //   console.log("Remove: ", key);
    //   if (this.selectedBlockListConfig) {
    //     let newSelectedBlockStatusList = this.selectedBlockListConfig.filter(
    //       (element) => element.value !== key
    //     );
    //     this.selectedBlockListConfig = newSelectedBlockStatusList;
    //     console.log(this.selectedBlockListConfig);
    //     this.auxBlockStatusList.push({
    //       value: key,
    //       text: text,
    //     });
    //   }
    // },
    pushSelectedBWList(key, text, isBlock) {
      if (isBlock) {
        let exists = false;
        let auxForSelected = this.selectedBlockListConfig.filter(
          (element) => element.text !== ""
        );
        this.selectedBlockListConfig = auxForSelected;
        for (let i = 0; i < this.selectedBlockListConfig.length; i++) {
          if (this.selectedBlockListConfig[i].value == key) {
            exists = true;
            break;
          }
        }
        if (exists == false) {
          this.selectedBlockListConfig.push({
            value: key,
            text: text,
          });
          let newAuxBlockStatusList = this.auxBlockStatusList.filter(
            (option) => option.value != key
          );
          this.auxBlockStatusList = newAuxBlockStatusList;
        }
      } else {
        let exists = false;
        let auxForSelected = this.selectedWarningListConfig.filter(
          (element) => element.text !== ""
        );
        this.selectedWarningListConfig = auxForSelected;
        for (let i = 0; i < this.selectedWarningListConfig.length; i++) {
          if (this.selectedWarningListConfig[i].value == key) {
            exists = true;
            break;
          }
        }
        if (exists == false) {
          this.selectedWarningListConfig.push({
            value: key,
            text: text,
          });
          let newAuxWarningStatusList = this.auxWarningStatusList.filter(
            (option) => option.value != key
          );
          this.auxWarningStatusList = newAuxWarningStatusList;
        }
      }
    },
    pushSelectedBlockList(key, text) {
      let exists = false;
      let auxForSelected = this.selectedBlockListConfig.filter(
        (element) => element.text !== ""
      );
      this.selectedBlockListConfig = auxForSelected;
      for (let i = 0; i < this.selectedBlockListConfig.length; i++) {
        if (this.selectedBlockListConfig[i].value == key) {
          exists = true;
          break;
        }
      }
      if (exists == false) {
        this.selectedBlockListConfig.push({
          value: key,
          text: text,
        });
        let newAuxBlockStatusList = this.auxBlockStatusList.filter(
          (option) => option.value != key
        );
        this.auxBlockStatusList = newAuxBlockStatusList;
      }
    },
    onClickBtn() {
      this.$router.push({ path: "new-configsupplier", replace: true });

      // this.$emit('clickedNew',true)
    },
    changeNav(generales, correos, listasNegras, archivos) {
      this.navModal.generales = generales;
      this.navModal.correos = correos;
      this.navModal.listasNegras = listasNegras;
      this.navModal.archivos = archivos;
    },
    splitSelectedBlockList() {
      // Vaciado del nuevo arreglo y de los seleccionados de configuración
      this.blockStatusListNew = [];
      this.selectedBlockListConfig = [];
      var texts =
        this.configurations[
          this.idModalToView
        ].custrecord_efx_pp_block_status[0].text.split(",");
      console.log("TEXTS: ", texts);
      var values =
        this.configurations[
          this.idModalToView
        ].custrecord_efx_pp_block_status[0].value.split(",");
      console.log("VALUES: ", values);
      this.auxBlockStatusList = this.blockStatusList;
      console.log("LLEGO AUXBLOCKSTATUSLIST CON: ", this.auxBlockStatusList);
      values.forEach((val, index) => {
        this.selectedBlockListConfig.push({
          value: val,
          text: texts[index],
        });
        let newBlockStatusList = this.auxBlockStatusList.filter(
          (element) => element.value !== val
        );
        this.auxBlockStatusList = newBlockStatusList;
      });

      console.log("SELECTED FROM Config: ", this.selectedBlockListConfig);
      console.log("NEW  FROM Config: ", this.auxBlockStatusList);
    },
    splitSelectedWarningList() {
      // Vaciado del nuevo arreglo y de los seleccionados de configuración
      this.warningStatusListNew = [];
      this.selectedWarningListConfig = [];
      var texts =
        this.configurations[
          this.idModalToView
        ].custrecord_efx_pp_warn_status[0].text.split(",");
      var values =
        this.configurations[
          this.idModalToView
        ].custrecord_efx_pp_warn_status[0].value.split(",");
      this.auxWarningStatusList = this.warningStatusList;
      values.forEach((val, index) => {
        this.selectedWarningListConfig.push({
          value: val,
          text: texts[index],
        });
        let newWarningStatusList = this.auxWarningStatusList.filter(
          (element) => element.value !== val
        );
        this.auxWarningStatusList = newWarningStatusList;
      });

      console.log(
        "SELECTED FROM Config WARNING: ",
        this.selectedWarningListConfig
      );
      console.log("NEW  FROM Config WARNING: ", this.warningStatusListNew);
    },
    getConfigurations() {
      try {
        let self = this;
        console.log("val self: ", self);
        let str = "";
        (str += "var https=null;"),
          (str += "var urlModule=null;"),
          (str += 'require(["N/url","N/https"], function(urlMode,https){'),
          (str += " var url=urlMode.resolveScript({"),
          (str += ' scriptId:"customscript_tkio_mxplus_testrequest_sl",'),
          (str += ' deploymentId:"customdeploy_tkio_mxplus_testrequest_sl",'),
          (str += "returnExternalUrl:false,"),
          // Se ponen los parámetros que va a leer NS y conforme a eso manda los datos
          (str += " params:{confSuppliers:true}"),
          (str += "});"),
          (str += "self.getConfigAxios(url)"),
          (str += "});"),
          eval(str);
      } catch (err) {
        console.log(err);
      }
    },
    getConfigAxios(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "authorization",
        },
      };
      axios
        .request(t)
        .then((b) => {
          console.log("CONFIGURACIONES: ", b.data);
          this.configurations = b.data;
          console.log("CONFIGURACIONES: ", this.configurations);
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
    getBlockStatusList() {
      try {
        let self = this;
        console.log("val self: ", self);
        let str = "";
        (str += "var https=null;"),
          (str += "var urlModule=null;"),
          (str += 'require(["N/url","N/https"], function(urlMode,https){'),
          (str += " var url=urlMode.resolveScript({"),
          (str += ' scriptId:"customscript_tkio_mxplus_testrequest_sl",'),
          (str += ' deploymentId:"customdeploy_tkio_mxplus_testrequest_sl",'),
          (str += "returnExternalUrl:false,"),
          // Se ponen los parámetros que va a leer NS y conforme a eso manda los datos
          (str += " params:{blockStatusList:true}"),
          (str += "});"),
          (str += "self.getConfigAxiosBlockList(url)"),
          (str += "});"),
          eval(str);
      } catch (err) {
        console.log(err);
      }
    },
    // getConfigAxiosBlockList llena los catálogos de Warning y Block status
    getConfigAxiosBlockList(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "authorization",
        },
      };
      axios
        .request(t)
        .then((b) => {
          // NOTA: según el formulario de NS de configuraciones, block y warning status ambos se traen de un mismo catálogo
          //que se llama "Status LCO" por esta razón se tienen seteados la lista de warning y block en una misma función.
          this.blockStatusList = b.data;
          this.auxBlockStatusList = b.data;
          this.auxWarningStatusList=b.data;
          console.log("DESPUES DE BUSCAR: ", this.blockStatusList);
          this.warningStatusList = b.data;
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
    // Para obtener los valores seleccionados de los multiselect
    getSelectValues(select) {
      var result = [];
      var options = select && select.options;
      var opt;

      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
          result.push({
            value: opt.value,
            text: opt.text,
          });
        }
      }
      return result;
    },
    // Botón de editar
    editRecord(idRecord) {
      console.log("Record a editar: ", idRecord);
      // var warningElement = document.getElementById("warningStatus");
      var objEditedBlockStatus = [];
      this.selectedBlockListConfig.forEach((element) => {
        objEditedBlockStatus.push(element.value);
      });

      var objEditedWarningStatus = [];
      this.selectedWarningListConfig.forEach((element)=>{
        objEditedWarningStatus.push(element.value);
      })
      const objEditedData = {
        id: idRecord,
        name: this.$refs.name.value,
        custrecord_efx_pp_block_status: objEditedBlockStatus,
        custrecord_efx_pp_mail_body_error:
          this.$refs.custrecord_efx_pp_mail_body_error.value,
        custrecord_efx_pp_mail_body:
          this.$refs.custrecord_efx_pp_mail_body.value,
        custrecord_efx_pp_mandatory_ev:
          this.$refs.custrecord_efx_pp_mandatory_ev.checked,
        custrecord_efx_pp_extencion_ev:
          this.$refs.custrecord_efx_pp_extencion_ev.value,
        isinactive: this.$refs.isinactive.checked,
        custrecord_efx_pp_tran_limit:
          this.$refs.custrecord_efx_pp_tran_limit.checked,
        custrecord_efx_pp_mandatory_pdf:
          this.$refs.custrecord_efx_pp_mandatory_pdf.checked,
        custrecord_efx_pp_mail_subject_error:
          this.$refs.custrecord_efx_pp_mail_subject_error.value,
        custrecord_efx_pp_mail_subjec:
          this.$refs.custrecord_efx_pp_mail_subjec.value,
        custrecord_efx_pp_warn_message:
          this.$refs.custrecord_efx_pp_warn_message.value,
        custrecord_efx_pp_warn_status: objEditedWarningStatus,
        custrecord_efx_pp_mandatory_xml:
          this.$refs.custrecord_efx_pp_mandatory_xml.checked,
      };
      console.log("DATOS INGRESADOS: ", objEditedData);
      this.sendData(objEditedData);
    },
    sendData(objToSend) {
      try {
        console.log(objToSend);
        const strData = JSON.stringify(objToSend);
        let self = this;
        console.log("getList -self: ", self);

        let str = "";
        (str += "var https=null;"),
          (str += "var urlModule=null;"),
          (str += 'require(["N/url","N/https"], function(urlMode,https){'),
          (str += " var url=urlMode.resolveScript({"),
          (str += ' scriptId:"customscript_tkio_mxplus_testrequest_sl",'),
          (str += ' deploymentId:"customdeploy_tkio_mxplus_testrequest_sl",'),
          (str += "returnExternalUrl:false,"),
          (str += " params:{sendEditRecord:true,bodyEdit:'" + strData + "'}"),
          (str += "});"),
          (str += "self.getConfigAxiosResponseEdit(url)"),
          (str += "});"),
          eval(str);
      } catch (err) {
        console.log(err);
      }
    },
    getConfigAxiosResponseEdit(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "authorization",
        },
      };
      axios
        .request(t)
        .then((b) => {
          console.log("RESPONSE FROM NS: ", b.data);
          this.msgAlert = b.data;
          if (this.msgAlert.includes("Error")) {
            this.showModalSuccess = true;
          } else {
            this.showModal = false;
            this.showModalSuccess = true;
            this.getBlockStatusList();
            this.getConfigurations();
          }
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
  },
};
</script>
    