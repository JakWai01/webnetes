export const exampleNodeConfig = `apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: Signaler
metadata:
  name: Public unisockets Signaling Server
  label: unisockets_public
spec:
  urls:
    - wss://unisockets.herokuapp.com
  retryAfter: 1000
---
apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: StunServer
metadata:
  name: Google STUN Server
  label: google
spec:
  urls:
  - stun:stun.l.google.com:19302
---
apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: StunServer
metadata:
  name: Twillio STUN Server
  label: twillio
spec:
  urls:
  - stun:global.stun.twilio.com:3478?transport=udp
---
apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: TurnServer
metadata:
  name: Twillio TURN Server (UDP)
  label: twillio_udp
spec:
  urls:
  - turn:global.turn.twilio.com:3478?transport=tcp
  username: f4b4035eaa76f4a55de5f4351567653ee4ff6fa97b50b6b334fcc1be9c27212d
  credential: w1uxM55V9yVoqyVFjt+mxDBV0F87AUCemaYVQGxsPLw=
---
apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: TurnServer
metadata:
  name: Twillio TURN Server (TCP)
  label: twillio_tcp
spec:
  urls:
  - turn:global.turn.twilio.com:3478?transport=tcp
  username: f4b4035eaa76f4a55de5f4351567653ee4ff6fa97b50b6b334fcc1be9c27212d
  credential: w1uxM55V9yVoqyVFjt+mxDBV0F87AUCemaYVQGxsPLw=
---
apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: TurnServer
metadata:
  name: Twillio TURN Server Fallback (TCP)
  label: twillio_tcp_fallback
spec:
  urls:
  - turn:global.turn.twilio.com:443?transport=tcp
  username: f4b4035eaa76f4a55de5f4351567653ee4ff6fa97b50b6b334fcc1be9c27212d
  credential: w1uxM55V9yVoqyVFjt+mxDBV0F87AUCemaYVQGxsPLw=
---
apiVersion: webnetes.felix.pojtinger.com/v1alpha1
kind: NetworkInterface
metadata:
  name: Management Network
  label: management_network
spec:
  network: ""
  prefix: 127.0.0
`;
