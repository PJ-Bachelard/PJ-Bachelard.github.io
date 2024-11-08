import { map } from "lodash";
import { each } from "lodash";
import { range } from "lodash";
import * as React from "react";
import Select, { components } from "react-select";

const COLORS = {
  ROGUE: "#FFF468",
  PALADIN: "#F48CBA",
  MAGE: "#3FC7EB",
  DRUID: "#FF7C0A",
  WARRIOR: "#C69B6D",
  HUNT: "#AAD372",
  WARLOCK: "#8788EE",
  PRIEST: "#FFFFFF",
  CHAMAN: "#2459FF",
  BLACK: "#000000",
};

const CLASSES = {
  ROGUE: { id: "rogue", label: "Voleur" },
  PALADIN: { id: "paladin", label: "Paladin" },
  MAGE: { id: "mage", label: "Mage" },
  DRUID: { id: "druid", label: "Druide" },
  WARRIOR: { id: "warrior", label: "Guerrier" },
  HUNT: { id: "hunt", label: "Chasseur" },
  WARLOCK: { id: "warlock", label: "Démoniste" },
  PRIEST: { id: "priest", label: "Prêtre" },
  CHAMAN: { id: "chaman", label: "Chaman" },
  OTHER: { id: "other", label: "Autres" },
};

const DEBUFFS = [
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg",
    name: "TF RN",
    shortName: "TF RN",
    color: COLORS.BLACK,
    discordId: "<:spell_nature_cyclone:1085608297849172078>",
    class: CLASSES.WARRIOR,
    spellsIds: [21992],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg",
    name: "TF TC",
    shortName: "TF TC",
    color: COLORS.BLACK,
    discordId: "<:spell_nature_cyclone:1085608297849172078>",
    class: CLASSES.WARRIOR,
    spellsIds: [27648],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_sunder.jpg",
    name: "Fracasser Armure",
    shortName: "Fraca. Armure",
    color: COLORS.WARRIOR,
    discordId: "<:ability_warrior_sunder:1085605753487892521>",
    class: CLASSES.WARRIOR,
    spellsIds: [11597],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_faeriefire.jpg",
    name: "Lucioles",
    shortName: "Lucioles",
    color: COLORS.DRUID,
    discordId: "<:spell_nature_faeriefire:1085630741091729518>",
    class: CLASSES.DRUID,
    spellsIds: [9907, 17392],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_snipershot.jpg",
    name: "Marque du chasseur",
    shortName: "Marque",
    color: COLORS.HUNT,
    discordId: "<:ability_hunter_snipershot:1085630710259384412>",
    class: CLASSES.HUNT,
    spellsIds: [14324, 14325],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholystrength.jpg",
    name: "Malédiction de témérité",
    shortName: "Mal. témérité",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_unholystrength:1085631603423850496>",
    class: CLASSES.WARLOCK,
    spellsIds: [7659, 11717],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofachimonde.jpg",
    name: "Malédiction de l'ombre",
    shortName: "Mal. l'ombre",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_curseofachimonde:1085631841018593280>",
    class: CLASSES.WARLOCK,
    spellsIds: [17937],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_chilltouch.jpg",
    name: "Malédiction des éléments",
    shortName: "Mal. éléments",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_chilltouch:1085630750864457738>",
    class: CLASSES.WARLOCK,
    spellsIds: [11722],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg",
    name: "Vulnérabilité à l'Ombre (démoniste)",
    shortName: "Vulné. ombre",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_shadowbolt:1085630755595624508>",
    class: CLASSES.WARLOCK,
    spellsIds: [17799, 17794, 17798, 17797, 17800],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg",
    name: "Vulnérabilité à l'Ombre (prêtre)",
    shortName: "Vulné. ombre",
    color: COLORS.PRIEST,
    discordId: "<:spell_shadow_blackplague:1085630748289159268>",
    class: CLASSES.PRIEST,
    spellsIds: [15258],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_siphonmana.jpg",
    name: "Fouet mental",
    shortName: "Fouet ment.",
    color: COLORS.PRIEST,
    discordId: "<:spell_shadow_siphonmana:1085631302008573982>",
    class: CLASSES.PRIEST,
    spellsIds: [18807],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg",
    name: "Mot de l'ombre : Douleur",
    shortName: "Ombre : Doul.",
    color: COLORS.PRIEST,
    discordId: "<:spell_shadow_shadowwordpain:1085630758003167363>",
    class: CLASSES.PRIEST,
    spellsIds: [10894],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_frost_chillingblast.jpg",
    name: "Froid hivernal",
    shortName: "Froid hiver.",
    color: COLORS.MAGE,
    discordId: "<:spell_frost_chillingblast:1085631034625900544>",
    class: CLASSES.MAGE,
    spellsIds: [12579],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_soulburn.jpg",
    name: "Vulnérabilité au feu",
    shortName: "Vulné. au feu",
    color: COLORS.MAGE,
    discordId: "<:spell_fire_soulburn:1085631204054814870>",
    class: CLASSES.MAGE,
    spellsIds: [22959],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_incinerate.jpg",
    name: "Enflammer",
    shortName: "Enflammer",
    color: COLORS.MAGE,
    discordId: "<:spell_fire_incinerate:1085630726734610495>",
    class: CLASSES.MAGE,
    spellsIds: [12654],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_warcry.jpg",
    name: "Cri démoralisant",
    shortName: "Cri démo.",
    color: COLORS.WARRIOR,
    discordId: "<:ability_warrior_warcry:1085630715946881125>",
    class: CLASSES.WARRIOR,
    spellsIds: [11556],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_fingerofdeath.jpg",
    name: "Don d'Arthas",
    shortName: "Don d'Arthas",
    color: COLORS.BLACK,
    discordId: "<:spell_shadow_fingerofdeath:1085631426759774308>",
    class: CLASSES.WARRIOR,
    spellsIds: [11374],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_healingaura.jpg",
    name: "Jugement de lumière",
    shortName: "Jug. lumière",
    color: COLORS.PALADIN,
    discordId: "<:spell_holy_healingaura:1085630731671326891>",
    class: CLASSES.PALADIN,
    spellsIds: [5373],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_righteousnessaura.jpg",
    name: "Jugement de sagesse",
    shortName: "Jug. sagesse",
    color: COLORS.PALADIN,
    discordId: "<:spell_holy_righteousnessaura:1085630736956137562>",
    class: CLASSES.PALADIN,
    spellsIds: [1826],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_abominationexplosion.jpg",
    name: "Corruption",
    shortName: "Corruption",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_abominationexplosio:1085642438200270918>",
    class: CLASSES.WARLOCK,
    spellsIds: [25311],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_bat.jpg",
    name: "Hurlement",
    shortName: "Hurlement",
    color: COLORS.BLACK,
    discordId: "<:ability_hunter_pet_bat:1085630707277250590>",
    class: CLASSES.HUNT,
    spellsIds: [24579],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg",
    name: "Rafale de flammes",
    shortName: "Raf. flammes",
    color: COLORS.BLACK,
    discordId: "<:spell_fire_fireball:1085630724666839090>",
    class: CLASSES.MAGE,
    spellsIds: [23341],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_innerfire.jpg",
    name: "Consécration",
    shortName: "Consécration",
    color: COLORS.PALADIN,
    discordId: "<:spell_holy_innerfire:1085630735341322321>",
    class: CLASSES.PALADIN,
    spellsIds: [20924],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg",
    name: "Eclat lunaire",
    shortName: "Eclat lun.",
    color: COLORS.DRUID,
    discordId: "<:spell_nature_starfall:1085630743960633456>",
    class: CLASSES.DRUID,
    spellsIds: [9835],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_crown_01.jpg",
    name: "Bonus T3 mage",
    shortName: "T3 mage",
    color: COLORS.BLACK,
    discordId: "<:inv_crown_01:1085630720095035442>",
    class: CLASSES.MAGE,
    spellsIds: [28772],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_05.jpg",
    name: "Bonus T2 chasseur",
    shortName: "T2 chasseur",
    color: COLORS.BLACK,
    discordId: "<:inv_helmet_05:1085630721479155752>",
    class: CLASSES.HUNT,
    spellsIds: [23577],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unsummonbuilding.jpg",
    name: "Etreinte vampirique",
    shortName: "Etreinte vam.",
    color: COLORS.PRIEST,
    discordId: "<:spell_shadow_unsummonbuilding:1085630763170541638>",
    class: CLASSES.PRIEST,
    spellsIds: [15286],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_searinglight.jpg",
    name: "Flammes sacrées",
    shortName: "Flam. sacrées",
    color: COLORS.PRIEST,
    discordId: "<:spell_holy_searinglight:1085631488671891457>",
    class: CLASSES.PRIEST,
    spellsIds: [15261],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_dualweild.jpg",
    name: "Poison mortel",
    shortName: "Poison mortel",
    color: COLORS.ROGUE,
    discordId: "<:ability_rogue_dualweild:1085630711773544478>",
    class: CLASSES.ROGUE,
    spellsIds: [20844, 8985],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_rupture.jpg",
    name: "Rupture",
    shortName: "Rupture",
    color: COLORS.ROGUE,
    discordId: "<:ability_rogue_rupture:1085630714386591764>",
    class: CLASSES.ROGUE,
    spellsIds: [11275],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_druid_disembowel.jpg",
    name: "Griffure",
    shortName: "Griffure",
    color: COLORS.DRUID,
    discordId: "<:ability_druid_disembowel:1085630701136781473>",
    class: CLASSES.DRUID,
    spellsIds: [9904],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_ghoulfrenzy.jpg",
    name: "Déchirure",
    shortName: "Déchirure",
    color: COLORS.DRUID,
    discordId: "<:ability_ghoulfrenzy:1085630702835478589>",
    class: CLASSES.DRUID,
    spellsIds: [9896],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg",
    name: "Flex slot (Blessure profonde, Fireball)",
    shortName: "Flex slot",
    color: COLORS.BLACK,
    discordId: "<:ability_backstab:1085608293789077535>",
    class: CLASSES.OTHER,
    spellsIds: [
      12867, 25306, 10151, 355, 14921, 6795, 1161, 20560, 12721, 7922, 20615,
    ],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_quickshot.jpg",
    name: "Morsure de serpent",
    shortName: "Mors. de serpent",
    color: COLORS.HUNT,
    discordId: "<:ability_hunter_quickshot:1085608295882039357>",
    class: CLASSES.HUNT,
    spellsIds: [13555, 25295],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_thunderclap.jpg",
    name: "Coup de tonnerre",
    shortName: "Coup de tonn.",
    color: COLORS.WARRIOR,
    discordId: "<:spell_nature_thunderclap:1085630968934703256>",
    class: CLASSES.WARRIOR,
    spellsIds: [11581],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_gouge.jpg",
    name: "Pourfendre",
    shortName: "Pourfendre",
    color: COLORS.WARRIOR,
    discordId: "<:ability_gouge:1085630705557590108>",
    class: CLASSES.WARRIOR,
    spellsIds: [11574],
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_insectswarm.jpg",
    name: "Essaim d'insectes",
    shortName: "Essaim d'ins.",
    color: COLORS.DRUID,
    discordId: "<:spell_nature_insectswarm:1085632735944646687>",
    class: CLASSES.DRUID,
    spellsIds: [24977],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_axe_12.jpg",
    name: "Crépuscule",
    shortName: "Crépuscule",
    color: COLORS.BLACK,
    discordId: "<:inv_axe_12:1085630718245359670>",
    class: CLASSES.OTHER,
    spellsIds: [16928],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_holysmite.jpg",
    name: "Jugement du Croisé",
    shortName: "Croisé",
    color: COLORS.PALADIN,
    discordId: "<:spell_holy_holysmite:1154730229617655839>",
    class: CLASSES.PALADIN,
    spellsIds: [20303],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_scourgebuild.jpg",
    name: "Bru. de l'Ombre",
    shortName: "Bru. Ombre",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_scourgebuild:1154731061138423848>",
    class: CLASSES.WARLOCK,
    spellsIds: [18871],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofsargeras.jpg",
    name: "Mal. d'Agonie",
    shortName: "Mal. d'Agonie",
    color: COLORS.WARLOCK,
    discordId: "<:spell_shadow_curseofsargeras:1154731634705309786>",
    class: CLASSES.WARLOCK,
    spellsIds: [11713, 18830],
  },
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_garrote.jpg",
    name: "Garrot",
    shortName: "Garrot",
    color: COLORS.ROGUE,
    discordId: "<:ability_rogue_garrote:1154797878238253076>",
    class: CLASSES.ROGUE,
    spellsIds: [11290]
  }, 
  {
    imageUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_fire_immolation.jpg",
    name: "Immolation",
    shortName: "Immolation",
    color: COLORS.WARLOCK,
    discordId: "<:spell_fire_immolation:1155140609930178620>",
    class: CLASSES.WARLOCK,
    spellsIds: [25309, 11667]
  },
  {
    imageUrl:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofmight.jpg",
    name: "Courroux naturel",
    shortName: "Courroux nat.",
    color: COLORS.CHAMAN,
    discordId: "<:spell_holy_sealofmight:1187747632425222335>",
    class: CLASSES.CHAMAN,
    spellsIds: [17364],
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
    authorizedDebuffsParam =
      JSON.parse(decodeURIComponent(params.get("authorized"))) ?? [];
  } catch (ignoreError) {
    authorizedDebuffsParam = [];
  }

  try {
    unauthorizedDebuffsParam =
      JSON.parse(decodeURIComponent(params.get("unauthorized"))) ?? [];
  } catch (ignoreError) {
    unauthorizedDebuffsParam = [];
  }
  const [localUrl, setLocalUrl] = React.useState("");
  const [discordWebhookUrl, setDiscordWebhookUrl] = React.useState("");

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
          class: debuff.class,
          discordId: debuff.discordId,
          shortName: debuff.shortName,
          spellsIds: debuff.spellsIds,
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
          class: debuff.class,
          discordId: debuff.discordId,
          shortName: debuff.shortName,
          spellsIds: debuff.spellsIds,
        });
        return acc;
      } else {
        acc.push(null);
      }
      return acc;
    }, [])
  );

  React.useEffect(() => {
    window.history.replaceState({}, "", localUrl);
  }, [localUrl]);

  React.useEffect(() => {
    const authorizedArray = encodeURIComponent(
      `[${authorizedDebuffs.map((item) => {
        if (item) {
          return DEBUFFS.findIndex(({ name }) => name === item.value);
        }
        return "null";
      })}]`
    );

    const unauthorizedArray = encodeURIComponent(
      `[${unauthorizedDebuffs.map((item) => {
        if (item) {
          return DEBUFFS.findIndex(({ name }) => name === item.value);
        }
        return "null";
      })}]`
    );
    setLocalUrl(
      `${location.protocol}//${location.host}/?authorized=${authorizedArray}&unauthorized=${unauthorizedArray}`
    );
  }, [authorizedDebuffs, unauthorizedDebuffs]);

  const debuffsOptions = DEBUFFS.map(
    ({ name, imageUrl, color, discordId, class: wowClass, shortName }) => ({
      label: name,
      value: name,
      imageUrl,
      color,
      discordId,
      class: wowClass,
      shortName,
    })
  );
  return (
    <>
      <div className="wrapper d-flex flex-column flex-lg-row justify-content-center m-lg-5">
        <div className="me-5">
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
                          container: (styles) => ({
                            ...styles,
                            width: "350px",
                          }),
                          menu: (styles) => ({ ...styles, width: "350px" }),
                          menuList: (styles) => ({ ...styles, width: "350px" }),
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
        <div className="me-5">
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
                          container: (styles) => ({
                            ...styles,
                            width: "350px",
                          }),
                          menu: (styles) => ({ ...styles, width: "350px" }),
                          menuList: (styles) => ({ ...styles, width: "350px" }),
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
        <div className="text-center">
          <button
            type="button"
            className="btn btn-success btn-lg"
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
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setDiscordWebhookUrl(e.target.value);
                    }}
                    placeholder="Adresse du webhook discord"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fermer
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      const authorizedValues = authorizedDebuffs.reduce(
                        (previousValue, currentValue) => {
                          if (currentValue) {
                            previousValue[currentValue.class.id] =
                              previousValue[currentValue.class.id]
                                ? {
                                    label: currentValue.class.label,
                                    values: [
                                      ...previousValue[currentValue.class.id]
                                        .values,
                                      currentValue,
                                    ],
                                  }
                                : {
                                    label: currentValue.class.label,
                                    values: [currentValue],
                                  };
                          }
                          return previousValue;
                        },
                        {}
                      );
                      const authorizedStr = map(
                        authorizedValues,
                        (currentValue) => {
                          if (currentValue) {
                            return {
                              name: `**__${currentValue.label}__** (${currentValue.values.length}) :`,
                              value:
                                currentValue.values
                                  .map(
                                    (value) =>
                                      `${
                                        value.discordId
                                      } **${value.shortName.substring(0, 13)}**`
                                  )
                                  .join("\n") + "\n\u200b\n",
                              inline: true,
                            };
                          }
                          return null;
                        }
                      );
                      const unauthorizedValues = unauthorizedDebuffs.reduce(
                        (previousValue, currentValue) => {
                          if (currentValue) {
                            previousValue[currentValue.class.id] =
                              previousValue[currentValue.class.id]
                                ? {
                                    label: currentValue.class.label,
                                    values: [
                                      ...previousValue[currentValue.class.id]
                                        .values,
                                      currentValue,
                                    ],
                                  }
                                : {
                                    label: currentValue.class.label,
                                    values: [currentValue],
                                  };
                          }
                          return previousValue;
                        },
                        {}
                      );

                      const MAX_COLUMNS = 3;

                      let unauthorizedCount = 0;
                      const unauthorizedStr = map(
                        unauthorizedValues,
                        (currentValue) => {
                          unauthorizedCount++;
                          if (currentValue) {
                            const reminder =
                              Object.keys(unauthorizedValues).length %
                              MAX_COLUMNS;
                            const isLastCategory =
                              reminder === 0
                                ? unauthorizedCount >=
                                  Object.keys(unauthorizedValues).length -
                                    MAX_COLUMNS
                                : unauthorizedCount >=
                                  Object.keys(unauthorizedValues).length -
                                    reminder;
                            return {
                              name: `**__${currentValue.label}__** :`,
                              value:
                                currentValue.values
                                  .map(
                                    (value) =>
                                      `${
                                        value.discordId
                                      } **${value.shortName.substring(0, 13)}**`
                                  )
                                  .join("\n") +
                                "\n" +
                                (isLastCategory ? "" : "\u200b"),
                              inline: true,
                            };
                          }
                          return null;
                        }
                      );

                      const authFields =
                        authorizedStr.length > 0 ? [...authorizedStr] : [];
                      const unauthFields =
                        unauthorizedStr.length > 0 ? [...unauthorizedStr] : [];

                      const fields = [...authFields, ...unauthFields];

                      const authAdditionalFields =
                        MAX_COLUMNS - (authFields.length % MAX_COLUMNS);
                      const unauthAdditionalFields =
                        MAX_COLUMNS - (unauthFields.length % MAX_COLUMNS);

                      if (discordWebhookUrl && fields.length > 0) {
                        fetch(discordWebhookUrl, {
                          method: "POST",
                          cache: "no-cache",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          body: JSON.stringify({
                            embeds: [
                              {
                                fields: [
                                  {
                                    name: `:white_check_mark: **AUTORISÉS** (${authorizedDebuffs.length})`,
                                    value: `\u200b`,
                                  },
                                  ...authFields,
                                  ...range(
                                    authAdditionalFields !== 3
                                      ? authAdditionalFields
                                      : 0
                                  ).map(() => ({
                                    name: "\u200b",
                                    value: "\u200b",
                                    inline: true,
                                  })),
                                  {
                                    name: `:x: **INTERDITS**`,
                                    value: "\u200b",
                                  },
                                  ...unauthFields,
                                  ...range(
                                    unauthAdditionalFields !== 3
                                      ? unauthAdditionalFields
                                      : 0
                                  ).map(() => ({
                                    name: "\u200b",
                                    value: "\u200b",
                                    inline: true,
                                  })),
                                  {
                                    name: "\u200b",
                                    value: `:desktop: **[webview](${localUrl})**`,
                                    inline: true,
                                  },
                                ],
                              },
                            ],
                          }), // body data type must match "Content-Type" header
                        });
                      }
                    }}
                  >
                    Webhook discord
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
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      let debuffsString = "";
                      each(authorizedDebuffs, ({ spellsIds }) => {
                        debuffsString += spellsIds.join(",") + "\n";
                      });
                      navigator.clipboard.writeText(debuffsString);
                    }}
                  >
                    Export WA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const Head = () => (
  <>
    <title>Liste des débuffs</title>
  </>
);
