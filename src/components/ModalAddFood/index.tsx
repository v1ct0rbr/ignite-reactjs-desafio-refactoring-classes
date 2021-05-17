import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodData {
	id: number;
	name: string;
	description: string;
	price: number;
	available: boolean;
	image: string;
}

interface ModalAddFoodProps {
	isOpen: boolean;
	setIsOpen: () => void;
	handleAddFood: (food: FoodData) => Promise<void>;
}

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) => {
	const formRef = useRef(null);

	async function handleSubmit(data: FoodData) {
		handleAddFood(data);
		setIsOpen();
	}

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<h1>Novo Prato</h1>
				<Input icon="image" name="image" placeholder="Cole o link aqui" />

				<Input icon="name" name="name" placeholder="Ex: Moda Italiana" />
				<Input inputType='currency' icon="price" name="price" placeholder="Ex: 19,90" />

				<Input icon="description" name="description" placeholder="Descrição" />
				<button type="submit" data-testid="add-food-button">
					<p className="text">Adicionar Prato</p>
					<div className="icon">
						<FiCheckSquare size={24} />
					</div>
				</button>
			</Form>
		</Modal>
	);
};

export default ModalAddFood;
