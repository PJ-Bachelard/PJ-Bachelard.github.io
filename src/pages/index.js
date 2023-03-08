import * as React from "react";
import Select, { components } from "react-select";
import { navigate } from "gatsby";

const COLORS = {
  ROGUE: "#FFF468",
  PALADIN: "#F48CBA",
  MAGE: "#3FC7EB",
  DRUID: "#FF7C0A",
  WARRIOR: "#C69B6D",
  HUNT: "#AAD372",
  WARLOCK: "#8788EE",
  PRIEST: "#FFFFFF",
  BLACK: "#000000",
};

const DEBUFFS = [
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg",
    name: "TF RN",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg",
    name: "TF TC",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_sunder.jpg",
    name: "Fracasser Armure",
    color: COLORS.WARRIOR,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_faeriefire.jpg",
    name: "Lucioles",
    color: COLORS.DRUID,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_snipershot.jpg",
    name: "Marque du chasseur",
    color: COLORS.HUNT,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholystrength.jpg",
    name: "Malédiction de témérité",
    color: COLORS.WARLOCK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofachimonde.jpg",
    name: "Malédiction de l'ombre",
    color: COLORS.WARLOCK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_chilltouch.jpg",
    name: "Malédiction des éléments",
    color: COLORS.WARLOCK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg",
    name: "Vulnérabilité à l'Ombre (démoniste)",
    color: COLORS.WARLOCK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg",
    name: "Vulnérabilité à l'Ombre (prêtre)",
    color: COLORS.PRIEST,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_siphonmana.jpg",
    name: "Fouet mental",
    color: COLORS.PRIEST,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg",
    name: "Mot de l'ombre : Douleur",
    color: COLORS.PRIEST,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_frost_chillingblast.jpg",
    name: "Froid hivernal",
    color: COLORS.MAGE,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_soulburn.jpg",
    name: "Vulnérabilité au feu",
    color: COLORS.MAGE,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_incinerate.jpg",
    name: "Enflammer",
    color: COLORS.MAGE,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_warcry.jpg",
    name: "Cri démoralisant",
    color: COLORS.WARRIOR,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_fingerofdeath.jpg",
    name: "Don d'Arthas",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_healingaura.jpg",
    name: "Jugement de lumière",
    color: COLORS.PALADIN,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_righteousnessaura.jpg",
    name: "Jugement de sagesse",
    color: COLORS.PALADIN,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_abominationexplosion.jpg",
    name: "Corruption",
    color: COLORS.WARLOCK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_bat.jpg",
    name: "Hurlement",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg",
    name: "Rafale de flammes",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_innerfire.jpg",
    name: "Consécration",
    color: COLORS.PALADIN,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg",
    name: "Eclat lunaire",
    color: COLORS.DRUID,
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_crown_01.jpg",
    name: "Bonus T3 mage",
    color: COLORS.BLACK,
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_05.jpg",
    name: "Bonus T2 chasseur",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unsummonbuilding.jpg",
    name: "Etreinte vampirique",
    color: COLORS.PRIEST,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_searinglight.jpg",
    name: "Flammes sacrées",
    color: COLORS.PRIEST,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_dualweild.jpg",
    name: "Poison mortel",
    color: COLORS.ROGUE,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_rupture.jpg",
    name: "Rupture",
    color: COLORS.ROGUE,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_druid_disembowel.jpg",
    name: "Griffure",
    color: COLORS.DRUID,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_ghoulfrenzy.jpg",
    name: "Déchirure",
    color: COLORS.DRUID,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg",
    name: "Flex slot (Blessure profonde, Fireball)",
    color: COLORS.BLACK,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_quickshot.jpg",
    name: "Morsure de serpent",
    color: COLORS.HUNT,
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_thunderclap.jpg",
    name: "Coup de tonnerre",
    color: COLORS.WARRIOR,
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_gouge.jpg",
    name: "Pourfendre",
    color: COLORS.WARRIOR,
  },
];

const AUTHORIZED_DEBUFFS_INIT_STATE = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const Option = (props) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <div
        className="d-flex align-items-center rounded"
        style={{ backgroundColor: data.color }}
      >
        <img src={data.imageUrl} width="34"></img>
        <div
          className="ms-2 text-nowrap text-truncate"
          style={{ color: data.color === COLORS.BLACK ? "#FFFFFF" : "#000000" }}
        >
          {data.label}
        </div>
      </div>
    </components.Option>
  );
};

const SingleValue = ({ children, ...props }) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      <div
        className="d-flex align-items-center rounded"
        style={{ backgroundColor: data.color }}
      >
        <img src={data.imageUrl} width="34"></img>
        <div
          className="ms-2 text-nowrap text-truncate"
          style={{ color: data.color === COLORS.BLACK ? "#FFFFFF" : "#000000" }}
        >
          {data.label}
        </div>
      </div>
    </components.SingleValue>
  );
};

export default function Home({ location }) {
  const params = new URLSearchParams(location.search);
  let authorizedDebuffsParam = [];
  let unauthorizedDebuffsParam = [];
  try {
    authorizedDebuffsParam = JSON.parse(params.get("authorized")) ?? [];
  } catch (ignoreError) {
    authorizedDebuffsParam = [];
  }

  try {
    unauthorizedDebuffsParam = JSON.parse(params.get("unauthorized")) ?? [];
  } catch (ignoreError) {
    unauthorizedDebuffsParam = [];
  }
  const [localUrl, setLocalUrl] = React.useState("");

  const [authorizedDebuffs, setAuthorizedDebuffs] = React.useState(
    AUTHORIZED_DEBUFFS_INIT_STATE.map((item, index) => {
      if (
        authorizedDebuffsParam &&
        authorizedDebuffsParam[index] !== null &&
        !isNaN(authorizedDebuffsParam[index])
      ) {
        const debuff = DEBUFFS[authorizedDebuffsParam[index]];
        return {
          label: debuff.name,
          value: debuff.name,
          imageUrl: debuff.imageUrl,
          color: debuff.color,
        };
      }
      return item;
    })
  );

  const [unauthorizedDebuffs, setUnauthorizedDebuffs] = React.useState(
    unauthorizedDebuffsParam.reduce((acc, index) => {
      if (DEBUFFS[index]) {
        const debuff = DEBUFFS[index];
        acc.push({
          label: debuff.name,
          value: debuff.name,
          imageUrl: debuff.imageUrl,
          color: debuff.color,
        });
        return acc;
      } else {
        acc.push(null);
      }
      return acc;
    }, [])
  );

  // React.useEffect(() => {
  //   setLocalUrl(window.location.href);
  // }, []);

  React.useEffect(() => {
    window.history.replaceState({}, "", localUrl);
  }, [localUrl]);

  React.useEffect(() => {
    setLocalUrl(
      `${location.protocol}//${
        location.host
      }/?authorized=[${authorizedDebuffs.map((item) => {
        if (item) {
          return DEBUFFS.findIndex(({ name }) => name === item.value);
        }
        return "null";
      })}]&unauthorized=[${unauthorizedDebuffs.map((item) => {
        if (item) {
          return DEBUFFS.findIndex(({ name }) => name === item.value);
        }
        return "null";
      })}]`
    );
  }, [authorizedDebuffs, unauthorizedDebuffs]);

  const debuffsOptions = DEBUFFS.map(({ name, imageUrl, color }) => ({
    label: name,
    value: name,
    imageUrl,
    color,
  }));
  return (
    <div className="d-flex justify-content-around m-5">
      <div>
        <table className="table" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th
                scope="col"
                className="text-uppercase text-center text-success"
              >
                Débuffs autorisés
              </th>
            </tr>
          </thead>
          <tbody>
            {authorizedDebuffs.map((debuff, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}. </th>
                  <th className="fw-normal">
                    <Select
                      isClearable
                      components={{ Option, SingleValue }}
                      className="basic-single"
                      isSearchable
                      options={debuffsOptions}
                      styles={{
                        container: (styles) => ({ ...styles, width: "250px" }),
                      }}
                      placeholder="Sélectionnez un débuff"
                      Option
                      value={debuff}
                      onChange={(value) => {
                        setAuthorizedDebuffs((previousState) => {
                          const nextState = [...previousState];
                          nextState[index] = value;
                          return nextState;
                        });
                      }}
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <table className="table" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th
                scope="col"
                className="text-uppercase text-center text-danger"
              >
                Débuffs interdits
              </th>
            </tr>
          </thead>
          <tbody>
            {unauthorizedDebuffs.map((debuff, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}. </th>
                  <th className="fw-normal">
                    <Select
                      isClearable
                      components={{ Option, SingleValue }}
                      className="basic-single"
                      isSearchable
                      options={debuffsOptions}
                      styles={{
                        container: (styles) => ({ ...styles, width: "250px" }),
                      }}
                      placeholder="Sélectionnez un débuff"
                      Option
                      value={debuff}
                      onChange={(value) => {
                        setUnauthorizedDebuffs((previousState) => {
                          const nextState = [...previousState];
                          nextState[index] = value;
                          return nextState;
                        });
                      }}
                    />
                  </th>
                </tr>
              );
            })}
            <tr>
              <th></th>
              <th>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    setUnauthorizedDebuffs((previousState) => {
                      const nextState = [...previousState, null];
                      return nextState;
                    });
                  }}
                >
                  + Ajouter un débuff
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#shareModal"
        >
          Partager la liste
        </button>

        <div
          className="modal fade"
          id="shareModal"
          tabIndex="-1"
          aria-labelledby="shareModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="shareModalLabel">
                  Partager la liste
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <pre className="m-2" style={{ height: "32px" }}>
                  <code>{localUrl}</code>
                </pre>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    navigator.clipboard.writeText(localUrl);
                  }}
                >
                  Copier l'URL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
