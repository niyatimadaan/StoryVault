import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import styles from "../styles/Profile.module.css"; // Importing the CSS module
import ProfileTable from "@/modules/profiletable";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  let user;
  try {
    user = await prisma.user.findFirst({
      include: {
        works: {
          include:{
            publisher: true
          },
          take: 10,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  return {
    props: { user },
  };
}

export default function Profile({ user }: any) {
  // return( <Try2 />);
  return (
    <>
      <NavBar />
      <div className={`${styles.profileContainer}`}>
        {/* To profile */}
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              paddingTop: 4,
              paddingBottom: 4,
              background: "#F7F7F7",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                paddingLeft: 2.19,
                paddingRight: 2.19,
                paddingTop: 3.44,
                paddingBottom: 3.44,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src="ArrowLeft.svg" />
            </div>
          </div>
          <div
            style={{
              color: "rgba(28, 28, 28, 0.75)",
              fontSize: 16,
              fontFamily: "Basier Circle",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            To Profile
          </div>
        </div>
        {/* Profile */}
        <div className={`${styles.profileHeader}`}>
          <Image
            src={user.avatar}
            alt="Profile Picture"
            width={88}
            height={88}
            style={{ borderRadius: 100 }}
          />
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "inline-flex",
              fontFamily: "Basier Circle",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            <div style={{ color: "#1C1C1C", fontSize: 32 }}>All work</div>
            <div style={{ color: "rgba(28, 28, 28, 0.75)", fontSize: 20 }}>by {user.name}</div>
          </div>
        </div>
        <ProfileTable user={user}/>
      </div>
      <Footer />
    </>
  );
}

function NavBar() {
  return (
    <div className={`${styles.navbarshow}`}>
      <div className={`${styles.smshow}`}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              padding: 4,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              display: "flex",
            }}
          >
            <div
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  paddingLeft: 1.75,
                  paddingRight: 1.75,
                  paddingTop: 3.25,
                  paddingBottom: 3.25,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Image src="Burger.svg" alt="burger" width={36} height={36} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#161616",
          fontSize: 24,
          fontFamily: "Redaction 10",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Chill Subs
      </div>
      <div
        style={{
          flex: "1 1 0",
          height: 44,
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
          display: "flex",
        }}
      >
        <div className={`${styles.mdhidden} ${styles.navheader}`}>
          <div
            style={{
              width: 76,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              display: "flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#1C1C1C",
                fontSize: 15,
                fontFamily: "Basier Circle",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Browse
            </div>
          </div>
          <div
            style={{
              width: 76,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              display: "flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#1C1C1C",
                fontSize: 15,
                fontFamily: "Basier Circle",
                fontWeight: "400",
                lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Tools
            </div>
            <div
              style={{
                width: 12,
                height: 12,
                paddingTop: 3.94,
                paddingBottom: 3.19,
                paddingLeft: 1.69,
                paddingRight: 1.69,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Image src="CaretDown.svg" alt="Caret Down" width={12} height={12} />
            </div>
          </div>
          <div
            style={{
              width: 101,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              display: "flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#1C1C1C",
                fontSize: 15,
                fontFamily: "Basier Circle",
                fontWeight: "400",
                lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Support us
            </div>
          </div>
        </div>
        <div
          style={{ width: 1, height: 24, background: "#D9D9D9" }}
          className={`${styles.mdhidden}`}
        />
        <div
          style={{
            paddingTop: 6,
            paddingBottom: 6,
            background: "white",
            borderRadius: 100,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div className={`${styles.smhidden}`}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  padding: 4,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      paddingLeft: 1.75,
                      paddingRight: 1.75,
                      paddingTop: 3.25,
                      paddingBottom: 3.25,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Image src="Burger.svg" alt="burger" width={36} height={36} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img style={{ width: 36, height: 36, borderRadius: 100 }} src="Avatar.png" />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      {/* large */}
      <div className={`${styles.mdhidden}`}>
        <div
          style={{
            width: "100%",
            height: 140,
            paddingLeft: 40,
            paddingRight: 40,
            background: "white",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: 70,
              paddingTop: 32,
              paddingBottom: 32,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 40,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#1C1C1C",
                fontSize: 24,
                fontFamily: "Redaction 10",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Chill Subs
            </div>
            <div
              style={{
                flex: "1 1 0",
                height: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 15,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "#1C1C1C",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Opportunities
              </div>
              <div
                style={{
                  color: "#1C1C1C",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Community
              </div>
              <div
                style={{
                  color: "#1C1C1C",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Resources
              </div>
              <div
                style={{
                  color: "#1C1C1C",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Tools
              </div>
              <div
                style={{
                  color: "#1C1C1C",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Claim Listing
              </div>
              <div
                style={{
                  color: "#1C1C1C",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Help Desk
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-start",
                gap: 15,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  textTransform: "lowercase",
                  wordWrap: "break-word",
                }}
              >
                INST
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  textTransform: "lowercase",
                  wordWrap: "break-word",
                }}
              >
                TW
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  textTransform: "lowercase",
                  wordWrap: "break-word",
                }}
              >
                FB
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  textTransform: "lowercase",
                  wordWrap: "break-word",
                }}
              >
                LN
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 70,
              paddingTop: 32,
              paddingBottom: 32,
              borderTop: "1px rgba(28, 28, 28, 0.10) solid",
              justifyContent: "space-between",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-end",
                gap: 16,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                © 2024 Chill Subs
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Terms
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Privacy
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Sitemap
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-end",
                gap: 16,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                About
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Stats
              </div>
              <div
                style={{
                  color: "rgba(28, 28, 28, 0.75)",
                  fontSize: 14,
                  fontFamily: "Basier Circle",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Help Desk
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* medium */}
      <div className={`${styles.lghidden} ${styles.smhidden}`}>
        <div
          style={{
            width: "100%",
            height: 240,
            paddingLeft: 40,
            paddingRight: 40,
            background: "white",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: 166,
              paddingTop: 32,
              paddingBottom: 32,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 32,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 187,
                textAlign: "center",
                color: "#1C1C1C",
                fontSize: 24,
                fontFamily: "Redaction",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Chill Subs
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                display: "inline-flex",
                color: "#1C1C1C",
                fontSize: 15,
                fontFamily: "Basier Circle",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              <div>Opportunities</div>
              <div>Community</div>
              <div>Resources</div>
              <div>Tools</div>
              <div>Claim Listing</div>
              <div>Help Desk</div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
                color: "rgba(28, 28, 28, 0.75)",
                fontSize: 14,
                fontFamily: "Basier Circle",
                fontWeight: "400",
                textTransform: "lowercase",
                wordWrap: "break-word",
              }}
            >
              <div>INST</div>
              <div>TW</div>
              <div>FB</div>
              <div>LN</div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              paddingTop: 32,
              paddingBottom: 32,
              borderTop: "1px rgba(28, 28, 28, 0.10) solid",
              justifyContent: "space-between",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                gap: 16,
                display: "flex",
                color: "rgba(28, 28, 28, 0.75)",
                fontSize: 14,
                fontFamily: "Basier Circle",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              <div style={{}}>© 2024 Chill Subs</div>
              <div>Terms</div>
              <div>Privacy</div>
              <div>Sitemap</div>
              <div>About</div>
              <div>Stats</div>
              <div>Help Desk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
