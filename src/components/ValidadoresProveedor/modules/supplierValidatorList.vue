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
              Edit |
              <span
                class="btnTriggerModal"
                @click="
                  showModal = !showModal;
                  idModalToView = configurations.map((e) => e.id).indexOf(item.id);
                  splitSelectedBlockList();
                  
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
    <!-- modal -->
    <div
      :class="showModal ? 'modal-overlay shown' : 'modal-overlay modalHidden'"
      class="modal-overlay"
      v-show="showModal"
      @click="showModal = false"
    >
      <div class="modal" @click.stop>
        <div class="modalHeader">
          <div><h4>Título de configuración</h4></div>
          <div class="close" @click="showModal = !showModal">
            <font-awesome-icon icon="fa-solid fa-rectangle-xmark" size="3x" />
          </div>
        </div>
        <div class="modalBody">
          <!-- Información de generales -->
          <div class="row rowHeader">
            <div class="column">Generales</div>
          </div>
          <div class="row rowModal">
            <div class="column">
              <div class="row">
                <label for="txtName">Nombre</label>
                <input
                  type="text"
                  name="txtName"
                  disabled
                  :value="configurations[idModalToView].name"
                />
              </div>
            </div>
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="inactiveCheck"
                  id="inactiveCheck"
                  disabled
                  :checked="configurations[idModalToView].isinactive"
                />
                <label for="inactiveCheck">Inactivo</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="row rowModal">
                <input
                  type="checkbox"
                  name="limitTransQuantity"
                  id="limitTransQuantity"
                  disabled
                  :checked="
                    configurations[idModalToView].custrecord_efx_pp_tran_limit
                  "
                />
                <label for="limitTransQuantity"
                  >Limitar a cantidad en transacción</label
                >
              </div>
            </div>
          </div>
          <!--  Envío de correos-->
          <div class="row rowHeader">
            <div class="column">Envío de correos</div>
          </div>
          <div class="row rowModal">
            <div class="email">
              <div class="column">
                <div class="row">
                  <label for="txtAsuntoCorreo">Título de correo</label>
                  <input
                    type="text"
                    name="txtAsuntoCorreo"
                    id="txtAsuntoCorreo"
                    class="asuntoEmail"
                    disabled
                    :value="
                      configurations[idModalToView]
                        .custrecord_efx_pp_mail_subjec
                    "
                  />
                </div>
              </div>
            </div>
            <div class="email">
              <div class="column">
                <div class="rowModalEmail">
                  <label for="txtCorreo">Cuerpo de correo</label>
                  <textarea
                    name="txtCorreo"
                    id="txtCorreo"
                    class="txtAreaEmail"
                    rows="5"
                    disabled
                    :value="
                      configurations[idModalToView].custrecord_efx_pp_mail_body
                    "
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="row rowModal">
            <div class="email">
              <div class="column">
                <div class="row">
                  <label for="txtAsuntoCorreo">Título de correo error</label>
                  <input
                    type="text"
                    name="txtAsuntoCorreo"
                    id="txtAsuntoCorreo"
                    class="asuntoEmail"
                    disabled
                    :value="
                      configurations[idModalToView]
                        .custrecord_efx_pp_mail_subject_error
                    "
                  />
                </div>
              </div>
            </div>
            <div class="email">
              <div class="column">
                <div class="rowModalEmail">
                  <label for="txtCorreo">Cuerpo de correo error</label>
                  <textarea
                    name="txtCorreo"
                    id="txtCorreo"
                    class="txtAreaEmail"
                    rows="5"
                    disabled
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
          <div class="row rowHeader">
            <div class="column">Listas Negras</div>
          </div>
          <div class="row rowModal">
            <div class="column">
              <div>
                <label for="txtName">Block Status</label>
              </div>
              <div>
                <select name="cars" id="cars" multiple disabled>
                  <!-- <option
                    :value="
                      configurations[idModalToView]
                        .custrecord_efx_pp_block_status[0].value
                    "
                    selected
                  >
                    {{
                      configurations[idModalToView]
                        .custrecord_efx_pp_block_status[0].text
                    }}
                  </option> -->
                  <option :selected="op.isSelected" :value="op.value" v-for="op in blockStatusListNew" :key="op">
                    {{ op.text }}
                  </option>
                </select>
              </div>
            </div>
            <div class="column">
              <div>
                <label for="txtName">Warning Status</label>
              </div>
              <div>
                <select name="cars" id="cars" multiple disabled>
                  <option
                    :value="
                      configurations[idModalToView]
                        .custrecord_efx_pp_warn_status[0].value
                    "
                    selected
                  >
                    {{
                      configurations[idModalToView]
                        .custrecord_efx_pp_warn_status[0].text
                    }}
                  </option>
                  <option value="Desvirtuados">Desvirtuados</option>
                  <option value="Presuntos">Presuntos</option>
                  <option value="Sentenciasfavorables">
                    Sentencias favorables
                  </option>
                </select>
              </div>
            </div>
            <div class="column">
              <div>
                <label for="txtWarning">Warning message</label>
              </div>
              <div>
                <textarea
                  name="txtWarning"
                  id="txtWarning"
                  class="txtAreaEmail"
                  rows="5"
                  disabled
                  :value="
                    configurations[idModalToView].custrecord_efx_pp_warn_message
                  "
                ></textarea>
              </div>
            </div>
          </div>
          <!--  Archivos-->
          <div class="row rowHeader mt-2">
            <div class="column">Archivos</div>
          </div>
          <div class="row rowModal">
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="limitTransQuantity"
                  id="limitTransQuantity"
                  disabled
                  :checked="
                    configurations[idModalToView]
                      .custrecord_efx_pp_mandatory_pdf
                  "
                />
                <label for="limitTransQuantity">PDF Mandatory</label>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="inactiveCheck"
                  id="inactiveCheck"
                  disabled
                  :checked="
                    configurations[idModalToView]
                      .custrecord_efx_pp_mandatory_xml
                  "
                />
                <label for="inactiveCheck">XML Mandatory</label>
              </div>
            </div>
          </div>
          <div class="row rowModal">
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="limitTransQuantity"
                  id="limitTransQuantity"
                  disabled
                  :checked="
                    configurations[idModalToView].custrecord_efx_pp_mandatory_ev
                  "
                />
                <label for="limitTransQuantity">Evidence Mandatory</label>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <label for="txtName">Ext. for evidence</label>
                <input
                  type="text"
                  name="txtName"
                  disabled
                  :value="
                    configurations[idModalToView].custrecord_efx_pp_extencion_ev
                  "
                />
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
        //       value: "1",
        //       text: "Definitivos",
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
        //       text: "Definitivos",
        //     },
        //   ],
        //   custrecord_efx_pp_mandatory_xml: true,
        // },
      ],
      showModal: false,
      idModalToView: 0,
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
      selectedBlockListConfig:[],
      blockStatusListNew:[]
    };
  },
  created() {
    this.getConfigurations();
    this.getBlockStatusList();
  },
  methods: {
    onClickBtn() {
      this.$router.push({ path: "new-configsupplier", replace: true });

      // this.$emit('clickedNew',true)
    },
    splitSelectedBlockList(){
      // Vaciado del nuevo arreglo y de los seleccionados de configuración
      this.blockStatusListNew=[];
      this.selectedBlockListConfig=[];
      var texts=this.configurations[this.idModalToView].custrecord_efx_pp_block_status[0].text.split(",");
      var values=this.configurations[this.idModalToView].custrecord_efx_pp_block_status[0].value.split(",");
      values.forEach((val,index)=>{
        this.selectedBlockListConfig.push({
          value:val,
          text:texts[index]
        });
      });
      this.blockStatusList.forEach((parent)=>{
        for(let i=0;i<this.selectedBlockListConfig.length;i++){
          if(this.selectedBlockListConfig[i].value==parent.value){
            this.blockStatusListNew.push({
              value:parent.value,
              text:parent.text,
              isSelected:true
            })
            break;
          }
        }
        var flag=true;
        for(let x=0;x<this.blockStatusListNew.length;x++){
          if(this.blockStatusListNew[x].value==parent.value){
            flag=false;
            break;
          }
        }
        if(flag){
          this.blockStatusListNew.push({
              value:parent.value,
              text:parent.text,
              isSelected:false
            })
        }
      })
      console.log("SELECTED FROM Config: ",this.selectedBlockListConfig);
      console.log("NEW  FROM Config: ",this.blockStatusListNew);
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
    getBlockStatusList(){
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
          this.blockStatusList = b.data;
          console.log("BLOCK LIST LCO: ", this.blockStatusList);
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
  },
};
</script>
    