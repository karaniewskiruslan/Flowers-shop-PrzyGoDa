import { FlowerCartAddressDelivery } from "./FlowerCartAdress/FlowerCartAddressDelivery";
import { FlowerCartAddressPromo } from "./FlowerCartAdress/FlowerCartAddressPromo";
import { FlowerCartAddressRender } from "./FlowerCartAdress/FlowerCartAddressRender";

export const FlowerCartAddress = () => {
  return (
    <article className="Flowers__Cart__DeliveryInfo">
      <FlowerCartAddressRender />
      <FlowerCartAddressDelivery />
      <FlowerCartAddressPromo />
    </article>
  );
};
