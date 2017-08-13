BACKUP_FOLER=/Media/USB-A1/node6

mkdir -p $BACKUP_FOLER/usr/lib/node/
cp -r /usr/lib/node/* $BACKUP_FOLER/usr/lib/node

mkdir -p $BACKUP_FOLER/usr/lib/node_modules/
cp -r /usr/lib/node_modules/* $BACKUP_FOLER/usr/lib/node_modules

mkdir -p $BACKUP_FOLER/usr/bin/
cp /usr/bin/node $BACKUP_FOLER/usr/bin/
