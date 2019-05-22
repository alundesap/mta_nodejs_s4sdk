# mta_nodejs_s4sdk
Multi-Target Application demonstrating the NodeJS version of the S/4 HANA Cloud SDK

mkdir -p target
tools/set_nodejs_env
mta --build-target XSA --mtar target/mta_nodejs_s4sdk-XSA.mtar build
xs deploy target/mta_nodejs_s4sdk-XSA.mtar -e deploy2xsa.mtaext

tools/timed "mta --build-target XSA --mtar target/mta_nodejs_s4sdk-XSA.mtar build ; xs deploy target/mta_nodejs_s4sdk-XSA.mtar -e deploy2xsa.mtaext"

tools/timed "mta --build-target CF --mtar target/mta_nodejs_s4sdk-CF.mtar build ; cf deploy target/mta_nodejs_s4sdk-CF.mtar -e deploy2cf.mtaext"

cf enable-ssh s4sdk-njs
cf restart s4sdk-njs
cf ssh s4sdk-njs

cf push s4sdk-web -m 512M -k 512M -n prov-multi-s4sdk-web -p web/
cf push s4sdk-njs -m 512M -k 512M -n prov-multi-s4sdk-njs -p nodejs/

