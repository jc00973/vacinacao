package vacinacao.util;

public class ValidacaoException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public ValidacaoException(String message) {
		super(message);
	}
	
	@Override
	public String toString() {
		return this.getClass().getSimpleName()+": "+getMessage();
	}

	
}
